const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const TagsCatalogo = sequelize.define('TagsCatalogo', {
  idCatalogo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idTags: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'tagscatalogo',
  timestamps: false,
});

module.exports = TagsCatalogo;
