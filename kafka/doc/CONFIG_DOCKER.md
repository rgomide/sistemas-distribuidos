# Configurações - Docker

Na raiz do projeto, executar o comando:
```bash
docker compose up 
```

Abra o terminal do container `kafka` e acesse o diretório do Kafka no container:
```bash
cd opt/kafka/bin/
```

Utilize os comandos disponíveis na documentação para [Linux/macOS](./CONFIG_LINUX_MAC.md) acrescentando o prefixo `sh` para executar o comando no container.

Exemplo:
```bash
sh kafka-console-consumer.sh --topic meu-topico --from-beginning --bootstrap-server localhost:9092
```