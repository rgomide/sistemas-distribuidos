const express = require('express')
const imoveis = require('./src/routes/imovel')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(imoveis)

module.exports = app