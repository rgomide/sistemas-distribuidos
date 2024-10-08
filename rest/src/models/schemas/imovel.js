module.exports = {
  type: 'object',
  properties: {
    rua: { type: ['string', 'null'] },
    cidade: { type: 'string' },
    estado: { type: 'string' },
    numero: { type: 'string' },
    tipo: { type: 'string' },
    id: { type: 'integer' }
  },
  required: ['rua', 'cidade', 'estado', 'numero', 'tipo'],
  additionalProperties: false
}