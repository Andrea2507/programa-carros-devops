const { DataTypes } = require('sequelize')
const db = require('../db/db') 

const Carro = db.define('Carro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(30),
        allowNull: true
    }
}, {
    tableName: 'carros', 
    timestamps: false     
})

module.exports = Carro
