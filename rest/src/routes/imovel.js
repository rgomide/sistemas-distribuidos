const imoveisController = require('../controllers/imovel')

const express = require('express')
const router = express.Router()

router.get('/imoveis', (req, res) => {
  imoveisController.getAll(req, res)
})

router.get('/imoveis/:id', (req, res) => {
  imoveisController.getById(req, res)
})

router.post('/imoveis', (req, res) => {
  imoveisController.insert(req, res)
})

router.put('/imoveis/:id', (req, res) => {
  imoveisController.update(req, res)
})

router.delete('/imoveis/:id', (req, res) => {
  imoveisController.remove(req, res)
})


module.exports = router