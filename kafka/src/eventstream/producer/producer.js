const kafka = require('../config/kafka-connector')

const enviarMensagem = async (mensagem) => {
  const producer = kafka.producer()
  const mensagemJson = JSON.stringify(mensagem)

  await producer.connect()

  await producer.send({
    topic: 'meu-topico',
    messages: [{ value: mensagemJson }]
  })

  await producer.disconnect()
}

module.exports = { enviarMensagem }