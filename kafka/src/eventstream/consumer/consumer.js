const uuid = require('uuid')
const kafka = require('../config/kafka-connector')

const consumer = kafka.consumer({ groupId: uuid.v4() })

const consumerModule = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'meu-topico', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      const parsedMessage = JSON.parse(message.value)
      const time = new Date(Number.parseInt(message.timestamp)).toISOString()

      console.log(`Topic: ${topic}`)
      console.log(`Partition: ${partition}`)
      console.log(`Timestamp: ${time}`)
      console.log(`Offset: ${message.offset}`)
      console.log('message', parsedMessage)
      console.log('\n')
    }
  })
}

module.exports = consumerModule