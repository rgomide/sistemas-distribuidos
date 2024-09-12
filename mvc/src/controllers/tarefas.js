const { getAll } = require("../models/tarefas")

function index(req, res) {
  const tarefas = getAll()
  console.log(tarefas)
  res.render('tarefas/index', { tarefas: tarefas })
}

module.exports = {
  index
}