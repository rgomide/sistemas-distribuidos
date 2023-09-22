const fs = require('fs')
const rewire = require('rewire')
const imovelModel = rewire('../../src/models/imovel')
const { createImovel } = require('../factories/imovel')


const path = './data/imoveisTest.json'

const mockGetPath = jest.fn(() => path)
imovelModel.__set__('getPath', mockGetPath)

describe('testes para models/imovel', () => {

  beforeEach(() => {
    const data = { imoveis: [] }
    fs.writeFileSync(path, JSON.stringify(data))
  })

  afterEach(() => {
    fs.unlinkSync(path)
  })

  describe('getAll', () => {

    test('retorna nenhum registro', () => {
      const imoveis = imovelModel.getAll()

      expect(imoveis.length).toEqual(0)

      expect(imoveis).toEqual([])
    })

    test('retorna todos os registros', () => {
      imovelModel.insert(createImovel({ rua: "rua 001" }))
      imovelModel.insert(createImovel({ rua: "rua 002" }))

      const imoveis = imovelModel.getAll()

      expect(imoveis.length).toEqual(2)

      expect(imoveis).toEqual(
        [
          expect.objectContaining({ id: 1, rua: "rua 001" }),
          expect.objectContaining({ id: 2, rua: "rua 002" })
        ]
      )
    })

  })

  describe('getById', () => {

    test('retorna um elemento existente', () => {
      imovelModel.insert(createImovel({ id: 1, rua: "rua 001" }))

      const imovel = imovelModel.getById(1)

      expect(imovel).toEqual(
        expect.objectContaining({ id: 1, rua: "rua 001" })
      )
    })

    test('retorna undefined para um elemento inexistente', () => {
      imovelModel.insert(createImovel({ id: 1, rua: "rua 001" }))

      const imovel = imovelModel.getById(10)

      expect(imovel).toBeUndefined()
    })

  })

  describe('remove', () => {

    test('remove um elemento existente', () => {
      imovelModel.insert(createImovel({ id: 1, rua: "rua 001" }))

      const isRemovido = imovelModel.remove(1)
      expect(isRemovido).toEqual(true)

      const imovel = imovelModel.getById(1)
      expect(imovel).toBeUndefined()

    })

    test('não remove um elemento inexistente', () => {
      imovelModel.insert(createImovel({ id: 1, rua: "rua 001" }))

      const isRemovido = imovelModel.remove(10)
      expect(isRemovido).toEqual(false)

      const imoveis = imovelModel.getAll()
      expect(imoveis.length).toEqual(1)
    })

  })

})