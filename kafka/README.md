# Kafka Playground

Um projeto didático para aprender os conceitos fundamentais do Apache Kafka através de uma aplicação prática que demonstra a comunicação entre produtores e consumidores de mensagens.

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Configurações do Apache Kafka](#configurações-do-apache-kafka)
  - [Windows](./doc/CONFIG_WIN.md)
  - [Linux/macOS](./doc/CONFIG_LINUX_MAC.md)
- [Executando o Projeto](#executando-o-projeto)
- [Exercícios](#exercícios)
- [Troubleshooting](#troubleshooting)
- [Referências](#referências)

## Sobre o Projeto

Este projeto foi desenvolvido com fins didáticos para demonstrar os conceitos fundamentais do Apache Kafka através de uma aplicação prática. A aplicação simula um sistema de mensageria onde:

- **Servidor Express**: Recebe requisições HTTP e publica mensagens no Kafka
- **Producer**: Envia mensagens para tópicos do Kafka
- **Consumer**: Consome mensagens dos tópicos e processa os dados

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **Java** (versão 17 ou superior) - necessário para o Apache Kafka
- **Apache Kafka** (versão 4.1.0 ou superior)

## Estrutura do projeto

O projeto de exemplo consiste em uma aplicação que disponibiliza um endpoint `POST /enviar-mensagem` e publica uma mensagem no stream de eventos.

Além disso, temos um módulo que consome todos os eventos publicados.

A Figura a seguir apresenta um esquema deste projeto:

<img src="./assets/projectStructure.png"/>

### Organização dos Arquivos

```
src/
├── server/           # Servidor Express
│   ├── app.js       # Configuração das rotas
│   └── server.js    # Inicialização do servidor
└── eventstream/      # Módulos do Kafka
    ├── config/
    │   └── kafka-connector.js  # Configuração do cliente Kafka
    ├── producer/
    │   └── producer.js         # Lógica do produtor
    └── consumer/
        ├── consumer.js         # Lógica do consumidor
        └── runConsumer.js      # Script para executar o consumidor
```

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

Em uma instância do terminal, inicialize o servidor:
```
npm run server
```

Em outra instância do terminal, inicie o consumer:
```
npm run consumer
```

Utilize um client de sua preferência para enviar uma mensagem para o endpoint `POST /enviar-mensagem`.

A mensagem será publicada no stream de eventos e consumida pelo consumer.

## Exercícios

### Configurando tópicos, produtores e consumidores

1. Inicialize o serviço do Kafka e crie um tópico  chamado `topico-exercicio` com 3 partições utilizando o utilitário `kafka-topics` via terminal.
2. Modifique o [consumer](./src/eventstream/consumer/consumer.js) para consumir as mensagens do tópico `topico-exercicio` e conecte-se ao broker utiliznado o groupId `grupo-exercicio`.
3. Modifique o [producer](./src/eventstream/producer/producer.js) para publicar as mensagens no tópico `topico-exercicio`.
4. Abra duas instâncias do terminal e em uma delas conecte como consumer (`kafka-console-consumer`) utilizando o group id `grupo-exercicio` e se inscreva no tópico `topico-exercicio`. Na segunda instância, conecte como consumer utilizando o group id `grupo-aleatorio` e se inscreva no tópico `topico-exercicio`.
5. Execute os projetos em terminais distintos:
```bash
# Servidor de aplicação que publica as mensagens no Kafka
npm run server

# Consumer que consome as mensagens do Kafka
npm run consumer
```
Ao todo, você deve ter 5 aplicações em execução:
1. Kafka Broker
2. Consumer 1 - group id `grupo-exercicio` (via terminal - `kafka-console-consumer` )
3. Consumer 2 - group id `grupo-aleatorio` (via terminal - `kafka-console-consumer`)
4. Server - aplicação que publica as mensagens no Kafka (`npm run server`)
5. Consumer - aplicação que consome as mensagens do Kafka (`npm run consumer`)

Com as aplicações em execução, abra algum client REST de sua preferência (ex.: Rapid API) e envie uma mensagem para o endpoint `POST /enviar-mensagem` com algum payload de sua preferência.

Exemplo de requisição:

`POST http://localhost:3000/enviar-mensagem`

Payload:
```json
{
  "id": 1,
  "nome": "Denecley"
}
```

Verifique se as mensagens foram publicadas no Kafka e consumidas corretamente pelos consumidores.

Resumo da aplicação:

![Resumo da aplicação](./doc/exercicio01.png)

## Troubleshooting

### Problemas Comuns

#### Erro de conexão com o Kafka
```
Error: connect ECONNREFUSED 127.0.0.1:9092
```
- Verifique se o Kafka Broker está em execução
- Confirme se a porta 9092 está disponível
- Verifique as configurações do broker

#### Consumer não recebe mensagens
- Verifique se o tópico existe
- Confirme se o consumer está inscrito no tópico correto
- Verifique se há mensagens no tópico

#### Producer não consegue enviar mensagens
- Verifique se o tópico existe
- Confirme se o Kafka está rodando
- Verifique as configurações de conexão

## Referências
- [Apache Kafka Quickstart](https://kafka.apache.org/quickstart)
- [Apache Kafka Documentation](https://kafka.apache.org/documentation/)
- [Download Kafka](https://dlcdn.apache.org/kafka/4.1.0/kafka_2.13-4.1.0.tgz)
- [KafkaJS library](https://kafka.js.org/)
- [Event-Driven Data Management for Microservices](https://www.f5.com/company/blog/nginx/event-driven-data-management-microservices)