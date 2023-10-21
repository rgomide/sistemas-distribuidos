const kafka = require('./config/kafka-connector')

const main = async () => {
  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic: 'meu-topico',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })

  await producer.disconnect()
}

main()