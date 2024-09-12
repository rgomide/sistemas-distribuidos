const express = require('express')
const router = express.Router()

const tarefas = require('../controllers/tarefas')

router.get('/tarefas', (req, res) => {
  tarefas.index(req, res)
})

module.exports = router