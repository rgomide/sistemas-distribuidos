module.exports = {
  getAll,
  getById,
  remove,
  save
}

function getAll(req, res) {
  console.log('Consultando todos os imóveis')

  const imoveis = [
    {
      id: 1,
      rua: 'Vincenza Street',
      cidade: 'Weberview',
      estado: 'MN',
      numero: '10279-9643',
      tipo: 'casa'
    }
  ]

  res.json(imoveis)
}

function getById(req, res) {
  const id = req.params.id

  console.log(`Consultando imóvel id = ${id}`)

  const imovel = {
    id: id,
    rua: 'Vincenza Street',
    cidade: 'Weberview',
    estado: 'MN',
    numero: '10279-9643',
    tipo: 'casa'
  }

  res.json(imovel)
}

function remove(req, res) {
  const id = req.params.id

  console.log(`Removendo imóvel id = ${id}`)

  res.sendStatus(200)
}

function save(req, res) {
  const imovel = req.body

  console.log(`Salvando o imóvel "${JSON.stringify(imovel)}"`)

  res.json(imovel)
}