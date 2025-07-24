// Mostrar nombre completo de actrices/actores junto a: título de los trabajos, categoría y género.

const { Catalogo, Actor, Categoria, Genero } = require('../../models');

module.exports = async (req, res) => {
  try {
    const resultados = await Actor.findAll({
      attributes: ['nombreCompleto'],
      include: {
        model: Catalogo,
        through: { attributes: [] }, // Para ocultar la tabla intermedia "Reparto"
        attributes: ['titulo'],
        include: [
          { model: Categoria, as: 'Categoria', attributes: ['nombreCategoria'] },
          { model: Genero, as: 'Genero', attributes: ['Nombre'] }
        ]
      }
    });

    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
