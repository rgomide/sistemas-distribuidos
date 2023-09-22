const fs = require('fs')

module.exports = {
  getAll,
  getById,
  insert,
  update,
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

function insert(imovel) {
  const imoveis = getAll()

  imovel.id = getNextId()
  imoveis.push(imovel)

  saveFile(imoveis)
}

function update(imovel) {
  const imoveis = getAll()

  const idx = imoveis.findIndex((item) => item.id == imovel.id)

  console.log(idx)

  if (idx >= 0) {
    imoveis[idx] = imovel
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