const { enviarMensagem } = require('../eventstream/producer/producer')
const express = require('express')

/**
 * Configuração da Aplicação Express
 * 
 * Este módulo configura o servidor web Express.js que:
 * 1. Recebe requisições HTTP POST
 * 2. Processa os dados recebidos
 * 3. Envia mensagens para o Kafka através do producer
 * 
 * @constant {Express} app - Instância configurada do Express
 */
const app = express()

// Middleware para parsing de JSON e URL-encoded data
// Essencial para processar dados enviados via POST
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * Endpoint para envio de mensagens
 * 
 * Rota POST que recebe dados via HTTP e os envia para o Kafka.
 * Este é o ponto de entrada da aplicação para receber mensagens externas.
 * 
 * @route POST /enviar-mensagem
 * @param {Object} req.body - Dados da mensagem enviada no corpo da requisição
 * @returns {Object} Resposta HTTP com status de sucesso ou erro
 */
app.post('/enviar-mensagem', async (req, res) => {
  try {
    // Extrai os dados do corpo da requisição
    const mensagem = req.body
    
    console.log('📨 Nova requisição recebida:', mensagem)
    
    // Validação básica - verifica se há dados na requisição
    if (!mensagem || Object.keys(mensagem).length === 0) {
      return res.status(400).json({ 
        error: 'Corpo da mensagem não pode estar vazio' 
      })
    }
    
    // Envia a mensagem para o Kafka através do producer
    await enviarMensagem(mensagem)
    
    // Resposta de sucesso
    res.status(200).json({ 
      success: true,
      message: 'Mensagem enviada com sucesso para o Kafka!',
      data: mensagem
    })
    
  } catch (erro) {
    console.error('❌ Erro ao processar requisição:', erro)
    
    // Resposta de erro
    res.status(500).json({ 
      success: false,
      error: 'Erro interno do servidor',
      details: erro.message 
    })
  }
})

/**
 * Endpoint de health check
 * 
 * Rota simples para verificar se o servidor está funcionando.
 * Útil para monitoramento e debugging.
 * 
 * @route GET /health
 * @returns {Object} Status do servidor
 */
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Kafka Playground Server'
  })
})

module.exports = app