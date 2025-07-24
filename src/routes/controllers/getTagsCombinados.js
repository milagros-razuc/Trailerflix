// Obtener películas con los tags "Aventura" y "Ciencia Ficción", o "Aventura" y "Fantasía".

const { Catalogo, Tag } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { tags } = req.query;

    if (!tags) {
      return res.status(400).json({ error: 'Debe proporcionar al menos un tag en la query ?tags=...' });
    }

    const tagsArray = tags.split(',').map(t => t.trim());

    const catalogos = await Catalogo.findAll({
      include: {
        model: Tag,
        as: 'Tags',
        through: { attributes: [] },
        where: {
          nombre: tagsArray,
        },
      },
    });

    // Filtra solo aquellos que tengan *todas* las tags solicitadas
    const resultado = catalogos.filter(c => {
      const tagNombres = c.Tags.map(t => t.nombre);
      return tagsArray.every(t => tagNombres.includes(t));
    });

    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar por combinación de tags' });
  }
};

