const Catalogo = require('../../models/catalogo');
const Genero = require('../../models/genero');

// Obtener una lista de películas por género buscado

module.exports = async (req, res) => {
  try {
    const { genero } = req.query;

    if (!genero) {
      return res.status(400).json({ error: 'Debe enviar uno o más géneros en el query param (?genero=Acción,Terror)' });
    }

    const generosArray = genero.split(',').map(g => g.trim());

    const peliculas = await Catalogo.findAll({
      include: {
        model: Genero,
        as: 'Genero',
        where: {
          Nombre: generosArray // Sequelize lo interpreta como un IN
        },
        attributes: ['Nombre']
      },
      attributes: ['id', 'titulo']
    });

    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener películas por género' });
  }
};