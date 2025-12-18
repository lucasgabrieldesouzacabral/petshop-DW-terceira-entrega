const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Vacina = sequelize.define('Vacina', {
    funcionarioId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tipoVacina: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Vacina;