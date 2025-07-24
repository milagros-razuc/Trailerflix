const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Ranking = sequelize.define('Ranking', {
    rankingID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    peliculaID: {
        type: DataTypes.INTEGER,
    allowNull: false,
    },
    calificacion: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: false,
        validate: {
          min: 0,
          max: 10,
        },
      },
      comentario: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    }, {
      tableName: 'Ranking',
      timestamps: false 
    });
  
    
  
module.exports = Ranking;