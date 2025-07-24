// Identificar la película/serie con más actores y la que tiene menos actores, indicando la cantidad en cada caso. 

const { Catalogo, Actor } = require('../../models');
const { Sequelize } = require('sequelize');

module.exports = async (req, res) => {
  try {
    // Trae todos los catálogos con la cantidad de actores asociados
    const catalogos = await Catalogo.findAll({
      include: [
        {
          model: Actor,
          through: { attributes: [] }
        }
      ]
    });

    const ordenados = catalogos
      .map(c => ({
        titulo: c.titulo,
        cantidadActores: c.Actors.length
      }))
      .sort((a, b) => b.cantidadActores - a.cantidadActores);

    const conMas = ordenados[0];
    const conMenos = ordenados[ordenados.length - 1];

    res.json({
      conMas,
      conMenos
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
