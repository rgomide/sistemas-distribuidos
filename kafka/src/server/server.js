const app = require('./app')

/**
 * Inicialização do Servidor
 * 
 * Este arquivo é responsável por iniciar o servidor Express.js.
 * Ele importa a configuração da aplicação e inicia o servidor na porta especificada.
 */

// Porta onde o servidor será executado
const PORT = process.env.PORT || 3000

// Inicia o servidor Express
app.listen(PORT, () => {
  console.log('🚀 Servidor Kafka Playground iniciado!')
  console.log(`📍 URL: http://localhost:${PORT}`)
  console.log(`📡 Endpoint: POST http://localhost:${PORT}/enviar-mensagem`)
  console.log(`❤️ Health Check: GET http://localhost:${PORT}/health`)
  console.log('⏰ Timestamp:', new Date().toISOString())
  console.log('----------------------------------------')
})