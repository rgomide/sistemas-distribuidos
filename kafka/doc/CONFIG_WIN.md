# Configurações - Windows

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
cd C:\kafka
.\bin\windows\kafka-storage.bat format -t "storage-key-id" -c .\config\server.properties --standalone

```

Editar o arquivo `.\bin\windows\kafka-server-start.bat` com as seguintes instruções:
- Adicione a palavra `rem` na linha `wmic os get osarchitecture | find /i "32-bit" >nul 2>&1`, ficando assim:
```
rem wmic os get osarchitecture | find /i "32-bit" >nul 2>&1
```

Inicialize o serviço executando o comando:
```
cd C:\kafka
.\bin\windows\kafka-server-start.bat .\config\server.properties
```
## Primeiros testes

### Criar um novo tópico

```
cd C:\kafka
.\bin\windows\kafka-topics.bat --create --topic meu-topico --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3
```

#### Flags disponíveis
- `--create`: Cria um novo tópico.
- `--topic`: Nome do tópico.
- `--bootstrap-server`: Endereço do broker.
- `--describe`: Exibe informações sobre o tópico.
- `--replication-factor`: Fator de replicação.
- `--partitions`: Número de partições.

### Producer

```
cd C:\kafka
.\bin\windows\kafka-console-producer.bat --topic meu-topico --bootstrap-server localhost:9092
```

#### Flags disponíveis
- `--topic`: Nome do tópico.
- `--bootstrap-server`: Endereço do broker.
- `--property "parse.key=true"`: Analisa a chave da mensagem.
- `--property "key.separator=:"`: Separa a chave da mensagem a partir do caractere `:`.

### Consumer

```
cd C:\kafka
.\bin\windows\kafka-console-consumer.bat --topic meu-topico --from-beginning --bootstrap-server localhost:9092
```

#### Flags disponíveis
- `--topic`: Nome do tópico.
- `--from-beginning`: Consome todas as mensagens do tópico.
- `--bootstrap-server`: Endereço do broker.
- `--group`: ID do grupo de consumidores.
- `--offset`: Offset da mensagem.
- `--property print.key=true`: Exibe a chave da mensagem.
- `--property key.separator="-"`: Separa a chave da mensagem a partir do caractere `-`.
