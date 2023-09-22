const fs = require('fs')

module.exports = {
  getAll,
  getById,
  save,
  remove
}

const path = `./data/imoveis.json`

function loadFile() {
  const data = JSON.parse(fs.readFileSync(path, 'utf-8'))
  return data.imoveis
}

function saveFile(imoveis) {
  const data = JSON.stringify({ imoveis: imoveis })
  fs.writeFileSync(path, data)
}

function getAll() {
  return loadFile()
}

function getById(id) {
  const imoveis = getAll()
  return imoveis.find((imovel) => imovel.id == id)
}

function save(imovel) {
  const imoveis = getAll()
  if (imovel.id) {

  } else {
    const id = getNextId()
    imovel.id = id
    imoveis.push(imovel)
    saveFile(imoveis)
  }
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
  imoveis = imoveis.filter((imovel) => imovel.id != id)
  saveFile(imoveis)
}