# Configurações - Linux/macOS

## Sumário

- [Kafka Broker](#kafka-broker)
- [Criar um novo tópico](#criar-um-novo-tópico)
- [Primeiros testes](#primeiros-testes)
  - [Producer](#producer)
  - [Consumer](#consumer)

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



## Primeiros testes

## Criar um novo tópico

```
cd ~/kafka
./bin/kafka-topics.sh --create --topic meu-topico --bootstrap-server localhost:9092
```

#### Flags disponíveis
- `--create`: Cria um novo tópico.
- `--topic`: Nome do tópico.
- `--bootstrap-server`: Endereço do broker.
- `--describe`: Exibe informações sobre o tópico.

### Producer

```
cd ~/kafka
./bin/kafka-console-producer.sh --topic meu-topico --bootstrap-server localhost:9092
```

#### Flags disponíveis
- `--topic`: Nome do tópico.
- `--bootstrap-server`: Endereço do broker.
- `--property "parse.key=true"`: Analisa a chave da mensagem.
- `--property "key.separator=:"`: Separa a chave da mensagem a partir do caractere `:`.

### Consumer

```
cd ~/kafka
./bin/kafka-console-consumer.sh --topic meu-topico --from-beginning --bootstrap-server localhost:9092
```

#### Flags disponíveis
- `--topic`: Nome do tópico.
- `--from-beginning`: Consome todas as mensagens do tópico.
- `--bootstrap-server`: Endereço do broker.
- `--group`: ID do grupo de consumidores.
- `--offset`: Offset da mensagem.
- `--property print.key=true`: Exibe a chave da mensagem.
- `--property key.separator="-"`: Separa a chave da mensagem a partir do caractere `-`.
