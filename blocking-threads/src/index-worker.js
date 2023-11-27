const express = require("express")
const { Worker } = require("worker_threads")
const app = express()
const port = 3000

app.get("/non-blocking/", (req, res) => {
  res.status(200).send("Esta página não é bloqueada")
})

app.get("/blocking", async (req, res) => {
  const worker = new Worker("./src/worker.js")

  worker.on("message", (data) => {
    res.status(200).send(`Contador: ${data}`)
  })

  worker.on("error", (msg) => {
    res.status(404).send(`Erro: ${msg}`)
  })
})

app.listen(port, () => {
  console.log(`Aplicação escutando a porta ${port}`)
})