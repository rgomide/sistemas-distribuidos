const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = __dirname + "/../contrato/aluno.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  defaults: true,
  oneofs: true,
});

const protos = grpc.loadPackageDefinition(packageDefinition);

function main() {
  const client = new protos.AlunoService(
    "localhost:4000",
    grpc.credentials.createInsecure()
  );

  client.criarAluno(
    { email: "criar@aluno.com", nome: "NovoAluno", matricula: "123456" },
    function (err, response) {
      console.log("Response:", response);
    }
  );

  client.getAlunoByMatricula({ matricula: 123 }, function (err, response) {
    console.log("Response:", response);
  });
}

main();