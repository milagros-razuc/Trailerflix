const Catalogo = require('../../models/catalogo');
const Genero = require('../../models/genero');

// Obtener una lista de películas por ide del género buscado

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ error: 'El ID de género debe ser un número válido' });
    }

    const peliculas = await Catalogo.findAll({
      where: { idGenero: parseInt(id) },
      include: {
        model: Genero,
        as: 'Genero',
        attributes: ['Nombre']
      },
      attributes: ['id', 'titulo']
    });

    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener películas por ID de género' });
  }
};