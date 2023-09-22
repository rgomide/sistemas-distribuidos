const imovelModel = require('../models/imovel')
const imovelSchema = require('../models/schemas/imovel')
const Ajv = require("ajv")
const ajv = new Ajv()

module.exports = {
  getAll,
  getById,
  remove,
  insert,
  update
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

function insert(req, res) {
  let imovel = req.body

  console.log('Criando o imóvel:')
  console.log(imovel)

  if (ajv.validate(imovelSchema, imovel)) {
    imovel = imovelModel.insert(imovel)
    res.json(imovel)
  } else {
    res.status(500).json({ errors: ajv.errors })
  }
}

function update(req, res) {
  let imovel = req.body

  console.log('Atualizando o imóvel:')
  console.log(imovel)

  const id = Number.parseInt(req.params.id)
  imovel.id = id

  if (ajv.validate(imovelSchema, imovel)) {
    imovel = imovelModel.update(imovel)
    res.json(imovel)
  } else {
    res.status(500).json({ errors: ajv.errors })
  }
}