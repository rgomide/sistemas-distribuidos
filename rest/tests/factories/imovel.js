const { faker } = require('@faker-js/faker');

module.exports = {
  createImovel
}

function createImovel(imovel) {
  return {
    id: faker.number.int(),
    rua: faker.location.street(),
    cidade: faker.location.city(),
    estado: faker.location.state({ abbreviated: true }),
    numero: faker.location.buildingNumber(),
    tipo: (faker.number.int() % 2 == 0) ? 'casa' : 'apartamento',
    ...imovel
  }

}