const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Vacina = sequelize.define('Vacina', {
    animalId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    funcionarioId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tipoVacina: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    // datas de aplicação agora são registradas nos agendamentos
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Vacina;