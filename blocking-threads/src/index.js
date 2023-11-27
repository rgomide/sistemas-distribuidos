const express = require("express")

const app = express()
const porta = 3000

app.get("/non-blocking/", (req, res) => {
  res.status(200).send("Esta página não é bloqueada")
})

app.get("/blocking", async (req, res) => {
  let contador = 0
  for (let i = 0; i < 10_000_000_000; i++) {
    contador++
  }
  res.status(200).send(`Contador: ${contador}`)
})

app.listen(porta, () => {
  console.log(`Aplicação escutando a porta ${porta}`)
})