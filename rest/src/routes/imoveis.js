const imoveisController = require('../controllers/imoveis')

const express = require('express')
const router = express.Router()

router.get('/imoveis', (req, res) => {
  imoveisController.getAll(req, res)
})

router.get('/imoveis/:id', (req, res) => {
  imoveisController.getById(req, res)
})

router.post('/imoveis', (req, res) => {
  imoveisController.save(req, res)
})

router.put('/imoveis', (req, res) => {
  imoveisController.save(req, res)
})

router.delete('/imoveis/:id', (req, res) => {
  imoveisController.remove(req, res)
})


module.exports = router