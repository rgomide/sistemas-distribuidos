const kafka = require('../config/kafka-connector')

/**
 * Função para enviar mensagens para o Kafka
 * 
 * Esta função atua como um Producer Kafka, responsável por:
 * 1. Criar uma instância do producer
 * 2. Conectar ao broker Kafka
 * 3. Enviar a mensagem para o tópico especificado
 * 4. Desconectar do broker
 * 
 * @async
 * @function enviarMensagem
 * @param {Object} mensagem - Objeto que será enviado como mensagem
 * @returns {Promise<void>} Promise que resolve quando a mensagem é enviada
 * @throws {Error} Erro caso não consiga enviar a mensagem
 */
const enviarMensagem = async (mensagem) => {
  try {
    // Cria uma nova instância do producer
    const producer = kafka.producer()
    
    // Converte a mensagem para JSON string
    // Isso garante que objetos JavaScript sejam serializados corretamente
    const mensagemJson = JSON.stringify(mensagem)
    
    console.log('📤 Conectando producer ao Kafka...')
    
    // Conecta o producer ao broker Kafka
    await producer.connect()
    console.log('✅ Producer conectado ao Kafka')

    // Envia a mensagem para o tópico 'meu-topico'
    // O Kafka automaticamente atribui uma partição se não especificada
    await producer.send({
      topic: 'meu-topico',
      messages: [{ 
        value: mensagemJson,
        // Timestamp será automaticamente adicionado pelo Kafka
        // Key pode ser especificada para garantir ordem em uma partição específica
      }]
    })
    
    console.log('✅ Mensagem enviada com sucesso para o tópico: meu-topico')
    console.log('📄 Conteúdo:', mensagem)

    // Desconecta o producer do broker
    // Importante para liberar recursos e conexões
    await producer.disconnect()
    console.log('🔌 Producer desconectado do Kafka')
    
  } catch (error) {
    console.error('❌ Erro ao enviar mensagem:', error)
    throw error
  }
}

module.exports = { enviarMensagem }