const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const reparto = sequelize.define('reparto', {
  idCatalogo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idActores: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'reparto',
  timestamps: false,
});

module.exports = reparto;