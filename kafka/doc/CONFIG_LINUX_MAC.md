# Linux/macOS

## Kafka Broker

Modifique as seguintes propriedades do arquivo `config\server.properties` para:
```
log.dirs=./kafka-logs
offsets.topic.num.partitions=1
log.segment.bytes=20000000
```

Formatar o diretório de logs do Kafka:
```
cd ~/kafka
./bin/kafka-storage.sh format -t "storage-key-id" -c ./config/server.properties --standalone
```

Inicialize o serviço executando o comando:
```
cd ~/kafka
./bin/kafka-server-start.sh ./config/server.properties
```

## Criar um novo tópico

```
cd ~/kafka
./bin/kafka-topics.sh --create --topic meu-topico --bootstrap-server localhost:9092
```

## Primeiros testes

### Producer

```
cd ~/kafka
./bin/kafka-console-producer.sh --topic meu-topico --bootstrap-server localhost:9092
```

### Consumer

```
cd ~/kafka
./bin/kafka-console-consumer.sh --topic meu-topico --from-beginning --bootstrap-server localhost:9092
```
