const consumerModule = require('./consumer')

const express = require('express')
const app = express()
const port = 3000

// Inicializa o consumer
consumerModule()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})