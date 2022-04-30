const fs = require("fs");
const ws = new require("ws");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const express = require("express");
const http = require("http");
const cors = require("cors");

app = express();
app.use(
  cors({
    origin: "*",
  })
);

const audio = fs.readFileSync("healthcheck.ogg");
const httpServer = http.createServer(app);

const apiKey = process.env.API_KEY;

process.on("uncaughtException", function (error) {
  console.log(error.stack);
});

// Задать настройки распознавания.
const configRequest = {
  sessionOptions: {
    recognitionModel: {
      audioFormat: {
        containerAudio: {
          containerAudioType: "OGG_OPUS",
        },
      },
      textNormalization: {
        textNormalization: "TEXT_NORMALIZATION_ENABLED",
        profanityFilter: false,
        literatureText: true,
      },
    },
  },
};

const serviceMetadata = new grpc.Metadata();
serviceMetadata.add("authorization", `Api-Key ${apiKey}`);

const packageDefinition = protoLoader.loadSync(
  "./yandex/cloud/ai/stt/v3/stt_service.proto",
  {
    includeDirs: ["node_modules/google-proto-files", "./cloudapi/"],
  }
);
const packageObject = grpc.loadPackageDefinition(packageDefinition);

// Установить соединение с сервером.
const serviceConstructor = packageObject.speechkit.stt.v3.Recognizer;
const grpcCredentials = grpc.credentials.createSsl(
  fs.readFileSync("./roots.pem")
);
const service = new serviceConstructor(
  "stt.api.cloud.yandex.net:443",
  grpcCredentials
);

const wsServer = new ws.Server({ server: httpServer });

wsServer.on("connection", onConnect);

function onConnect(wsClient) {
  console.log("User connected");
  let call = undefined;
  let messageTimer = undefined;

  wsClient.on("message", function (message, isBinary) {
    if (messageTimer !== undefined) {
      clearTimeout(messageTimer);
    }
    messageTimer = setTimeout(() => {
      if (call !== undefined) {
        call.end();
      }
    }, 2000);

    if (call === undefined) {
      console.log("SpeechKit connected");
      call = service["RecognizeStreaming"](serviceMetadata);
      call.write(configRequest);

      call.on("data", (response) => {
        let res = undefined;
        let isFinal = false;
        if ("partial" in response && "alternatives" in response.partial) {
          res = response.partial.alternatives[0].text;
        } else if ("final" in response && "alternatives" in response.final) {
          res = response.final.alternatives[0].text;
        } else if (
          "finalRefinement" in response &&
          "alternatives" in response.finalRefinement.normalizedText
        ) {
          res = response.finalRefinement.normalizedText.alternatives[0].text;
          isFinal = true;
        }
        if (res == undefined) {
          return;
        }
        let yandexResponse = JSON.stringify({
          text: res,
          isFinal: isFinal.toString(),
        });
        wsClient.send(yandexResponse);
        console.log(yandexResponse);
      });

      call.on("error", (e) => {
        let errorResponse = JSON.stringify({
          error: e,
        });
        wsClient.send(errorResponse);
      });

      call.on("close", () => {
        console.log("SpeechKit disconnected");
        call = undefined;
      });
    }
    if (!isBinary) {
      setTimeout(() => {
        if (call !== undefined) {
          call.end();
        }
      }, 1000);
    } else {
      call.write({ chunk: { data: message } });
    }
  });

  wsClient.on("close", function (event) {
    // TODO: refactor
    setTimeout(() => {
      if (call !== undefined) {
        call.end();
      }
    }, 500);
    console.log("User disconnected");
  });
}

app.get("/", (req, res) => {
  res.send(
    JSON.stringify({ message: "Memento Streaming SRS Backend API v0.1" })
  );
});

app.get("/healthcheck", (req, res) => {
  const call = service["RecognizeStreaming"](serviceMetadata);
  call.write(configRequest);
  call.write({ chunk: { data: audio } });
  call.end();

  let failureMessage = setTimeout(() => {
    res.send(JSON.stringify({ status: "UNAVAILABLE" }));
  }, 2000);
  call.on("data", (response) => {
    if (
      "finalRefinement" in response &&
      "alternatives" in response.finalRefinement.normalizedText
    ) {
      clearTimeout(failureMessage);
      res.send(JSON.stringify({ status: "OK" }));
      return;
    }
  });
});

httpServer.listen(process.env.PORT || 8080, () => {
  console.log(`Server started on port ${httpServer.address().port} :)`);
});
