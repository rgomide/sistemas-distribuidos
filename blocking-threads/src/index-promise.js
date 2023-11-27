const express = require("express")
const app = express()
const port = 3000

app.get("/non-blocking/", (req, res) => {
  res.status(200).send("Esta página não é bloqueada")
})

app.get("/blocking", async (req, res) => {
  const contador = await calcularContador();
  res.status(200).send(`Contador: ${contador}`)
})

app.listen(port, () => {
  console.log(`Aplicação escutando a porta ${port}`)
})


function calcularContador() {
  return new Promise((resolve, reject) => {
    let contador = 0
    for (let i = 0; i < 10_000_000_000; i++) {
      contador++
    }
    resolve(contador)
  })
}