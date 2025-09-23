const uuid = require('uuid')
const kafka = require('../config/kafka-connector')

/**
 * Configuração do Consumer Kafka
 * 
 * O consumer é responsável por consumir mensagens de um tópico específico.
 * Utilizamos um UUID único como groupId para garantir que cada instância
 * do consumer seja tratada como um grupo separado.
 */
const consumer = kafka.consumer({ groupId: uuid.v4() })

/**
 * Módulo principal do Consumer
 * 
 * Esta função configura e inicia o consumer para:
 * 1. Conectar ao broker Kafka
 * 2. Inscrever-se no tópico especificado
 * 3. Processar mensagens recebidas
 * 
 * @async
 * @function consumerModule
 */
const consumerModule = async () => {
  try {
    // Conecta ao broker Kafka
    await consumer.connect()
    console.log('✅ Consumer conectado ao Kafka')

    // Inscreve-se no tópico 'meu-topico'
    // fromBeginning: true garante que mensagens antigas também sejam consumidas
    await consumer.subscribe({ 
      topic: 'meu-topico', 
      fromBeginning: true 
    })
    console.log('📡 Consumer inscrito no tópico: meu-topico')

    // Inicia o processamento de mensagens
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // Decodifica o valor da mensagem de Buffer para string
        const decodedMessageValue = message.value.toString()
        let parsedMessage = decodedMessageValue

        // Tenta fazer parse da mensagem como JSON
        // Se falhar, mantém como string
        try {
          parsedMessage = JSON.parse(decodedMessageValue)
        } catch (error) {
          // Mensagem não é JSON válido, mantém como string
          console.log('⚠️ Mensagem não é JSON válido, processando como string')
        }

        // Converte timestamp para formato legível
        const time = new Date(Number.parseInt(message.timestamp)).toISOString()

        // Exibe informações detalhadas da mensagem recebida
        console.log('-----------MESSAGE RECEIVED -------------')
        console.log(`📋 Topic: ${topic}`)
        console.log(`🔢 Partition: ${partition}`)
        console.log(`⏰ Timestamp: ${time}`)
        console.log(`📍 Offset: ${message.offset}`)
        console.log(`📄 Message:`, parsedMessage)
        console.log('-----------------------------------------')
        console.log('\n')
      }
    })
  } catch (error) {
    console.error('❌ Erro no consumer:', error)
    throw error
  }
}

module.exports = consumerModule