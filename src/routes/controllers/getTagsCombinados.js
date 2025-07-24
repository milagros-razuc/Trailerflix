const Catalogo = require('../../models/catalogo');
const Tag = require('../../models/tag');

// Obtener películas con los tags "Aventura" y "Ciencia Ficción", o "Aventura" y "Fantasía".

module.exports = async (req, res) => {
  try {
    const catalogos = await Catalogo.findAll({
      include: {
        model: Tag,
        as: 'Tags',
        through: { attributes: [] },
        where: {
          nombre: ['Aventura', 'Ciencia Ficción', 'Fantasía'],
        },
      },
    });

    // Filtrar por combinación exacta
    const resultado = catalogos.filter(c => {
      const tagNombres = c.Tags.map(t => t.nombre);
      return (
        (tagNombres.includes('Aventura') && tagNombres.includes('Ciencia Ficción')) ||
        (tagNombres.includes('Aventura') && tagNombres.includes('Fantasía'))
      );
    });

    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar por tags combinados' });
  }
};
