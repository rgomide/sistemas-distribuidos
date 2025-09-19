# Kafka Playground

## Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Configurações do Apache Kafka](#configurações-do-apache-kafka)
  - [Windows](./doc/CONFIG_WIN.md)
  - [Linux/macOS](./doc/CONFIG_LINUX_MAC.md)
- [Executando o Projeto](#executando-o-projeto)
- [Referências](#referências)

## Estrutura do projeto

O projeto de exemplo consiste em uma aplicação que disponibiliza um enpoint `POST /enviar-mensagem` e publica uma mensagem no stream de eventos.

Além disso, temos um módulo que consome todos os eventos publicados.

A Figura a seguir apresenta um esquema deste projeto:

<img src="./assets/projectStructure.png"/>

## Configurações do Apache Kafka

Certifique-se de que o seu sistema operacional possua o Java versão 17 ou superior instalado.

Faça o download do [Apache Kafka](https://dlcdn.apache.org/kafka/4.1.0/kafka_2.13-4.1.0.tgz). Descompacte os arquivos na pasta:

- Windows: `C:\kafka`.
- Linux/macOS: `~/kafka`.

Siga as instruções de configuração para o seu sistema operacional:
- [Windows](./doc/CONFIG_WIN.md)
- [Linux/macOS](./doc/CONFIG_LINUX_MAC.md)

## Executando o Projeto

Certifique-se de que o Apache Kafka esteja em execução.

Execute o comando para instalar as dependências:
```
npm install
```

Inicialize o servidor:
```
npm run server
```

Inicie o consumer:
```
npm run consumer
```

Utilize um client de sua preferência para enviar uma mensagem para o endpoint `POST /enviar-mensagem`.

A mensagem será publicada no stream de eventos e consumida pelo consumer.

## Referências
- [Apache Kafka Quickstart](https://kafka.apache.org/quickstart)
- [Download Kafka](https://dlcdn.apache.org/kafka/4.1.0/kafka_2.13-4.1.0.tgz)
- [KafkaJS library](https://kafka.js.org/)