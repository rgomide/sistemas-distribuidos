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

### Testando

- Producer

```
cd C:\kafka
.\bin\windows\kafka-console-producer.bat --topic meu-topico --bootstrap-server localhost:9092
```

- Consumer

```
cd C:\kafka
.\bin\windows\kafka-console-consumer.bat --topic meu-topico --from-beginning --bootstrap-server localhost:9092
```

## MacOS