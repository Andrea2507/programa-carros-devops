const express = require('express')
const router = express.Router()
const carroController = require('../controllers/carro.controller') 


router.get('/carros', carroController.getCarros)
router.get('/carros/:id', carroController.getCarroById)
router.get('/carros/marca', carroController.getCarroByMarca) 
router.post('/carros', carroController.createCarro)
router.put('/carros/:id', carroController.updateCarro)
router.delete('/carros/:id', carroController.deleteCarro)

module.exports = router
