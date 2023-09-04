const express = require('express')
const imoveis = require('./src/routes/imoveis')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(imoveis)

app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000')
})