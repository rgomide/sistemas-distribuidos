const fs = require('fs')

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
}

function getPath() {
  return './data/imoveis.json'
}

function loadFile() {
  const data = JSON.parse(fs.readFileSync(getPath(), 'utf-8'))
  return data.imoveis
}

function saveFile(imoveis) {
  const data = JSON.stringify({ imoveis: imoveis })
  fs.writeFileSync(getPath(), data)
}

function getAll() {
  return loadFile()
}

function getById(id) {
  const imoveis = getAll()
  return imoveis.find((imovel) => imovel.id == id)
}

function insert(imovel) {
  const imoveis = getAll()

  imovel.id = getNextId()
  imoveis.push(imovel)

  saveFile(imoveis)
}

function update(imovel) {
  const imoveis = getAll()

  const idx = imoveis.findIndex((item) => item.id == imovel.id)

  if (idx < 0) {
    return false
  }

  imoveis[idx] = imovel
  saveFile(imoveis)
  return true
}

function getNextId() {
  const imoveis = getAll()

  let nextId = imoveis
    .reduce((maior, imovel) => {
      if (imovel.id > maior) {
        return imovel.id
      } else {
        maior
      }
    }, 0)

  nextId++

  return nextId
}

function remove(id) {
  let imoveis = getAll()
  const tamanhoAnterior = imoveis.length

  imoveis = imoveis.filter((imovel) => imovel.id != id)
  saveFile(imoveis)

  return tamanhoAnterior != imoveis.length
}