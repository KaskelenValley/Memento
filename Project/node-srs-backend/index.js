const fs = require("fs");
const ws = new require("ws");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const folderId = process.env.FOLDER_ID;
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

const server = new ws.Server({ port: process.env.PORT });

server.on("connection", onConnect);

function onConnect(wsClient) {
  console.log("User connected");
  const call = service["RecognizeStreaming"](serviceMetadata);
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

  wsClient.on("message", function (message, isBinary) {
    if (!isBinary) {
      setTimeout(() => {
        call.end();
      }, 1000);
    }
    call.write({ chunk: { data: message } });
  });

  wsClient.on("close", function () {
    // TODO: refactor
    setTimeout(() => {
      call.end();
    }, 1000);
    console.log("User disconnected");
  });
}
