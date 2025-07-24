const { Catalogo } = require('../../models');
const { Op, literal } = require('sequelize');

//Listar las series con al menos 3 temporadas.

module.exports = async (req, res) => {
  try {
    const series = await Catalogo.findAll({
      where: literal('CAST(temporadas AS UNSIGNED) >= 3'),
      attributes: ['titulo', 'temporadas'],
    });

    res.json(series);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener series con 3 o más temporadas' });
  }
};
