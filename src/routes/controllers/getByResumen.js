//Visualizar títulos y categorías cuyo resumen contenga la palabra "misión".

const Catalogo = require('../../models/catalogo');
const Categoria = require('../../models/categoria');

const { Op } = require('sequelize');
module.exports = async (req, res) => {
  try {
    const { palabra } = req.query;

    if (!palabra || palabra.trim() === '') {
      return res.status(400).json({ error: 'Debe proporcionar una palabra en el query param (?palabra=...)' });
    }

    const resultados = await Catalogo.findAll({
      where: {
        resumen: {
          [Op.like]: `%${palabra}%`,
        },
      },
      include: {
        model: Categoria,
        as: 'Categoria',
        attributes: ['nombreCategoria'],
      },
      attributes: ['titulo', 'resumen'],
    });

    res.json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar por resumen' });
  }
};

