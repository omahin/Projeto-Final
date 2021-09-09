const express = require('express')
const router = express.Router()
const controller = require('../controllers/terapeutaControllers')

router.get('/todos', controller.todos)

router.get('/:especialidade', controller.getByEspecialidade)

router.get('/abordagem/:abordagem', controller.getByAbordagem)

router.get('/convenio/:convenio', controller.getByConvenio)

router.get('/id/:id', controller.getById)

router.post('/criar', controller.criarTerapeuta)

router.patch('/:id', controller.atualizarTerapeuta)

router.delete('/:id', controller.deletarTerapeuta)

module.exports = router