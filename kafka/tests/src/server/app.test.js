const request = require('supertest')
const app = require('../../../src/server/app')
const kafkaProducer = require('../../../src/eventstream/producer/producer')

jest.mock('../../../src/eventstream/producer/producer')

describe('testes para app.js', () => {

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  test('envia uma mensagem com sucesso', async () => {
    const producerSpy = jest.spyOn(kafkaProducer, 'enviarMensagem')

    const mensagem = {
      id: 1,
      nome: 'Denecley'
    }

    const response = await request(app)
      .post('/enviar-mensagem')
      .send(mensagem)

    expect(producerSpy).toHaveBeenCalledTimes(1)
    expect(producerSpy).toHaveBeenCalledWith({
      id: 1,
      nome: 'Denecley'
    })

    expect(response.statusCode).toEqual(200)
    expect(response.text).toEqual('Mensagem enviada com sucesso!')
  })

  test('envia uma mensagem com erro pois o kafka broker está indisponível', async () => {
    const producerSpy = jest.spyOn(kafkaProducer, 'enviarMensagem').mockImplementation(() => {
      throw {
        "name": "KafkaJSNumberOfRetriesExceeded",
        "retriable": false,
        "retryCount": 5,
        "retryTime": 11898
      }
    })

    const mensagem = {
      id: 1,
      nome: 'Denecley'
    }

    const response = await request(app)
      .post('/enviar-mensagem')
      .send(mensagem)

    expect(producerSpy).toHaveBeenCalledTimes(1)
    expect(producerSpy).toHaveBeenCalledWith({
      id: 1,
      nome: 'Denecley'
    })

    expect(response.statusCode).toEqual(500)
    expect(response.body).toEqual({
      "name": "KafkaJSNumberOfRetriesExceeded",
      "retriable": false,
      "retryCount": 5,
      "retryTime": 11898
    })
  })

})