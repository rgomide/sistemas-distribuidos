const express = require('express')
const imoveis = require('./src/routes/imoveis')

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(imoveis)

app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000')
})