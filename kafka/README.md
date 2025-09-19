# Kafka Playground

## Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Configurações](#configurações)
- [Windows](./doc/CONFIG_WIN.md)
- [Linux/macOS](./doc/CONFIG_LINUX_MAC.md)

## Estrutura do projeto

O projeto de exemplo consiste em uma aplicação que disponibiliza um enpoint `POST /enviar-mensagem` e publica uma mensagem no stream de eventos.

Além disso, temos um módulo que consome todos os eventos publicados.

A Figura a seguir apresenta um esquema deste projeto:

<img src="./assets/projectStructure.png"/>

## Configurações

Faça o download do [Apache Kafka](https://dlcdn.apache.org/kafka/4.1.0/kafka_2.13-4.1.0.tgz).

- Windows: descompate os arquivos na pasta `C:\kafka`.
- Linux/macOS: descompate os arquivos na pasta `~/kafka`.

Siga as instruções de configuração para o seu sistema operacional:
- [Windows](./doc/CONFIG_WIN.md)
- [Linux/macOS](./doc/CONFIG_LINUX_MAC.md)

## Referências
- [Apache Kafka Quickstart](https://kafka.apache.org/quickstart)
- [Download Kafka](https://dlcdn.apache.org/kafka/4.1.0/kafka_2.13-4.1.0.tgz)
- [KafkaJS library](https://kafka.js.org/)