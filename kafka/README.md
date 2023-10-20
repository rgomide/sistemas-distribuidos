# Kafka Playground

## Sumário

- [Windows](#windows)
  - [Iniciar Zookeeper](#iniciar-zookeeper)
  - [Iniciar Kafka Broker](#iniciar-kafka-broker)
  - [Criar novo tópico](#criar-um-novo-tópico)
  - [Primeiros testes](#primeiros-testes)
    - [Producer](#producer)
    - [Consumer](#consumer)
- [Linux/MacOS](#linuxmacos)

## Windows

### Iniciar Zookeeper

Modifique a propriedade `dataDir` do arquivo `config\zookeeper.properties` para:

```
dataDir=C:\kafka\zookeeper-data
```

Inicialize o serviço executando o comando:

```
cd C:\kafka
.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
```

### Iniciar Kafka Broker

Modifique a propriedade `log.dirs` do arquivo `config\server.properties` para:

```
log.dirs=C:\kafka\kafka-logs
```

Inicialize o serviço executando o comando:

```
cd C:\kafka
.\bin\windows\kafka-server-start.bat .\config\server.properties
```

### Criar um novo tópico

```
cd C:\kafka
.\bin\windows\kafka-topics.bat --create --topic meu-topico --bootstrap-server localhost:9092
```

### Primeiros testes

#### Producer

```
cd C:\kafka
.\bin\windows\kafka-console-producer.bat --topic meu-topico --bootstrap-server localhost:9092
```

#### Consumer

```
cd C:\kafka
.\bin\windows\kafka-console-consumer.bat --topic meu-topico --from-beginning --bootstrap-server localhost:9092
```

## Linux/MacOS

## Referências
- [Primeiros passos](https://kafka.apache.org/quickstart)
- [Download Kafka](https://www.apache.org/dyn/closer.cgi?path=/kafka/3.6.0/kafka_2.13-3.6.0.tgz)