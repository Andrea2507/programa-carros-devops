const CarroModel = require('../models/carro.model')


exports.getCarros = async (req, res) => {
    try {
        const carros = await CarroModel.findAll()
        res.status(200).json(carros)
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error al obtener los carros'
        })
    }
};

// Obtener carro por id
exports.getCarroById = async (req, res) => {
    try {
        const id = req.params.id
        const carro = await CarroModel.findByPk(id)
        if (!carro) {
            return res.status(404).json({
                error: 'Carro no encontrado en la base de datos'
            })
        }
        res.status(200).json(carro)
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error al obtener el carro'
        })
    }
}


exports.getCarroByMarca = async (req, res) => {
    try {
        const { marca } = req.body
        const carro = await CarroModel.findOne({
            where: { marca: marca }
        })
        if (!carro) {
            return res.status(404).json({
                error: 'Carro no encontrado en la base de datos'
            })
        }
        res.status(200).json(carro)
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error al obtener el carro'
        })
    }
}

// Crear nuevo carro
exports.createCarro = async (req, res) => {
    try {
        const { marca, modelo, anio, color } = req.body
        const carro = await CarroModel.create({ marca, modelo, anio, color })
        res.status(201).json(carro)
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error al crear el carro'
        })
    }
}

// Actualizar carro
exports.updateCarro = async (req, res) => {
    try {
        const id = req.params.id
        const carro = await CarroModel.findByPk(id)
        if (!carro) {
            return res.status(404).json({
                error: 'Carro no encontrado en la base de datos'
            })
        }

        const { marca, modelo, anio, color } = req.body
        carro.marca = marca
        carro.modelo = modelo
        carro.anio = anio
        carro.color = color

        await carro.save()
        res.json(carro)
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error al actualizar el carro'
        })
    }
}

// Eliminar carro
exports.deleteCarro = async (req, res) => {
    try {
        const id = req.params.id
        const carro = await CarroModel.findByPk(id)
        if (!carro) {
            return res.status(404).json({
                error: 'Carro no encontrado en la base de datos'
            })
        }

        await carro.destroy()
        res.status(200).json({
            message: 'Carro eliminado correctamente'
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error al eliminar el carro'
        })
    }
}
