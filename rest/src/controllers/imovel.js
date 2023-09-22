const imovelModel = require('../models/imovel')

module.exports = {
  getAll,
  getById,
  remove,
  save
}

function getAll(req, res) {
  console.log('Consultando todos os imóveis')

  const imoveis = imovelModel.getAll()
  res.json(imoveis)
}

function getById(req, res) {
  const id = req.params.id

  console.log(`Consultando imóvel id = ${id}`)

  const imovel = imovelModel.getById(id)

  if (imovel) {
    res.json(imovel)
  } else {
    res.sendStatus(404)
  }
}

function remove(req, res) {
  const id = req.params.id

  console.log(`Removendo imóvel id = ${id}`)

  imovelModel.remove(id)
  res.sendStatus(200)
}

function save(req, res) {
  const imovel = req.body

  console.log(`Salvando o imóvel "${JSON.stringify(imovel)}"`)

  res.json(imovel)
}