const { enviarMensagem } = require('../eventstream/producer/producer')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/enviar-mensagem', async (req, res) => {
  const mensagem = req.body
  try {
    await enviarMensagem(mensagem)
    res.status(200).send('Mensagem enviada com sucesso!')
  } catch (erro) {
    res.status(500).json(erro)
  }
})

module.exports = app