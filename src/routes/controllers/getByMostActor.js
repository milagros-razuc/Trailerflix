// Identificar la película/serie con más actores y la que tiene menos actores, indicando la cantidad en cada caso. 

const { Catalogo, Actor } = require('../../models');

module.exports = async (req, res) => {
  try {
    const catalogos = await Catalogo.findAll({
      include: [
        {
          model: Actor,
          as: 'Actores', // usa el alias correcto
          through: { attributes: [] }
        }
      ]
    });

    const ordenados = catalogos
      .map(c => ({
        titulo: c.titulo,
        cantidadActores: c.Actores.length // corregido aquí
      }))
      .sort((a, b) => b.cantidadActores - a.cantidadActores);

    const conMas = ordenados[0];
    const conMenos = ordenados[ordenados.length - 1];

    res.json({
      conMas,
      conMenos
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
