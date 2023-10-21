const kafka = require('./config/kafka-connector')

const main = async () => {
  const producer = kafka.producer()

  const mensagem = {
    type: 'imovel-insert',
    id: 1
  }

  const mensagemJson = JSON.stringify(mensagem)

  await producer.connect()
  await producer.send({
    topic: 'meu-topico',
    messages: [{ value: mensagemJson }]
  })

  await producer.disconnect()
}

main()