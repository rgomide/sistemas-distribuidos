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

function getAll(_req, res) {
  const imoveis = imovelModel.getAll()
  res.json(imoveis)
}

function getById(req, res) {
  const id = req.params.id

  const imovel = imovelModel.getById(id)

  if (imovel) {
    res.json(imovel)
  } else {
    res.sendStatus(404)
  }
}

function remove(req, res) {
  const id = req.params.id

  if (imovelModel.remove(id)) {
    res.sendStatus(200)
  } else {
    res
      .status(404)
      .json({ errors: ['Registro não encontrado'] })
  }
}

function insert(req, res) {
  let imovel = req.body

  if (ajv.validate(imovelSchema, imovel)) {
    imovel = imovelModel.insert(imovel)
    res.json(imovel)
  } else {
    res
      .status(500)
      .json({ errors: ajv.errors })
  }
}

function update(req, res) {
  let imovel = req.body

  const id = Number.parseInt(req.params.id)
  imovel.id = id

  if (ajv.validate(imovelSchema, imovel)) {
    if (imovelModel.update(imovel)) {
      res.json(imovel)
    } else {
      res
        .status(404)
        .json({ errors: ['Registro não encontrado'] })
    }
  } else {
    res
      .status(500)
      .json({ errors: ajv.errors })
  }
}