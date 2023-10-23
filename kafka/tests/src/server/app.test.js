const request = require('supertest')
const app = require('../../../src/server/app')
const kafkaConnector = require('../../../src/eventstream/config/kafka-connector')

describe('testes para app.js', () => {

  beforeEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  test('envia uma mensagem com sucesso', async () => {
    const sendFunction = jest.fn()

    jest.spyOn(kafkaConnector, 'producer').mockImplementation(() => {
      return {
        connect: jest.fn().mockResolvedValue(true),
        disconnect: jest.fn().mockResolvedValue(true),
        send: jest.fn().mockImplementation((mensagem) => {
          sendFunction(mensagem)
          Promise.resolve(true)
        })
      }
    })

    const mensagem = {
      id: 1,
      nome: 'Denecley'
    }

    const response = await request(app)
      .post('/enviar-mensagem')
      .send(mensagem)

    expect(sendFunction).toHaveBeenCalledTimes(1)
    expect(sendFunction).toHaveBeenCalledWith({
      messages: [
        {
          value: JSON.stringify({
            id: 1,
            nome: 'Denecley'
          })
        }
      ],
      topic: 'meu-topico'
    })

    expect(response.statusCode).toEqual(200)
    expect(response.text).toEqual('Mensagem enviada com sucesso!')
  })

  test('envia uma mensagem com erro pois o kafka broker está indisponível', async () => {
    jest.spyOn(kafkaConnector, 'producer').mockImplementation(() => {
      return {
        connect: jest.fn().mockRejectedValue({
          "name": "KafkaJSNumberOfRetriesExceeded",
          "retriable": false,
          "retryCount": 5,
          "retryTime": 11898
        })
      }
    })

    const mensagem = {
      id: 1,
      nome: 'Denecley'
    }

    const response = await request(app)
      .post('/enviar-mensagem')
      .send(mensagem)

    expect(response.statusCode).toEqual(500)
    expect(response.body).toEqual({
      "name": "KafkaJSNumberOfRetriesExceeded",
      "retriable": false,
      "retryCount": 5,
      "retryTime": 11898
    })
  })

})