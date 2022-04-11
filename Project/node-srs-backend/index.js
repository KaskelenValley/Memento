const fs = require("fs");
const ws = new require("ws");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const { setTimeout } = require("timers/promises");

const folderId = process.env.FOLDER_ID;
const apiKey = process.env.API_KEY;

process.on("uncaughtException", function (error) {
  console.log(error.stack);
});

// Задать настройки распознавания.
const request = {
  config: {
    specification: {
      languageCode: "ru-RU",
      profanityFilter: false,
      model: "general",
      partialResults: true,
      audioEncoding: "OGG_OPUS",
    },
    folderId: folderId,
  },
};

const serviceMetadata = new grpc.Metadata();
serviceMetadata.add("authorization", `Api-Key ${apiKey}`);

const packageDefinition = protoLoader.loadSync(
  "./yandex/cloud/ai/stt/v2/stt_service.proto",
  {
    includeDirs: ["node_modules/google-proto-files", "./cloudapi/"],
  }
);
const packageObject = grpc.loadPackageDefinition(packageDefinition);

// Установить соединение с сервером.
const serviceConstructor = packageObject.yandex.cloud.ai.stt.v2.SttService;
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
  const call = service["StreamingRecognize"](serviceMetadata);
  call.write(request);

  call.on("data", (response) => {
    let res = response.chunks[0].alternatives[0].text;
    wsClient.send(
      JSON.stringify({
        text: res,
        isFinal: Boolean(response.chunks[0].final).toString(),
      })
    );
  });

  wsClient.on("message", function (message, isBinary) {
    if (!isBinary) {
      setTimeout(() => {
        call.end();
      }, 2000);
    }
    call.write({ audioContent: message });
  });

  wsClient.on("close", function () {
    // TODO: refactor
    setTimeout(() => {
      call.end();
    }, 2000);
    console.log("User disconnected");
  });
}
