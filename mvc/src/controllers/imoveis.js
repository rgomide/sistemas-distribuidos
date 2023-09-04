const { getLastImoveis, getByTipo } = require("../models/imoveis")

module.exports = {
  index,
  search
}

function index(req, res) {
  const imoveis = getLastImoveis()
  res.render('imoveis/index', { imoveis: imoveis })
}

function search(req, res) {
  const { tipo } = req.query
  const imoveis = getByTipo(tipo)
  res.render('imoveis/search-result', { imoveis: imoveis })
}