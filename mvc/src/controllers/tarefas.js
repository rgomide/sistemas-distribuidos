const { getAll } = require("../models/tarefas")

function index(req, res) {
  const tarefas = getAll()
  res.render('tarefas/index', { tarefas: tarefas })
}

function salvar(req, res) {
  console.log('SALVAR')
  console.log(req.body)

  const tarefas = getAll()
  res.render('tarefas/index', { tarefas: tarefas })
}

function excluir(req, res) {
  console.log('EXCLUIR')
  console.log(req.params)

  const tarefas = getAll()
  res.render('tarefas/index', { tarefas: tarefas })
}

function alternarStatus(req, res) {
  console.log('ALTERAR STATUS')
  console.log(req.params)

  const tarefas = getAll()
  res.render('tarefas/index', { tarefas: tarefas })
}

module.exports = {
  alternarStatus,
  excluir,
  index,
  salvar
}