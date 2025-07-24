// Ver solo la categoría "Películas": mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, duración y enlace al tráiler.

const { Catalogo, Categoria, Genero, Tags } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const catalogos = await Catalogo.findAll({
      where: { idCategoria: id },
      include: [
        {
          model: Categoria,
          as: 'Categoria',
          attributes: ['nombreCategoria']
        },
        {
          model: Genero,
          as: 'Genero',
          attributes: ['Nombre']
        },
        {
          model: Tags,
          as: 'Tags',
          through: { attributes: [] },
          attributes: ['nombre']
        }
      ],
      attributes: ['titulo', 'duracion', 'trailer', 'resumen', 'temporadas']
    });

    if (!catalogos.length) {
      return res.status(404).json({ message: 'No se encontraron resultados para esa categoría' });
    }

    const tipoCategoria = catalogos[0].Categoria.nombreCategoria.toLowerCase();

    const resultados = catalogos.map(item => {
      const base = {
        titulo: item.titulo.toUpperCase(),
        genero: item.Genero.Nombre.toUpperCase(),
        tags: item.Tags.map(t => t.nombre).join(', '),
        trailer: item.trailer
      };

      if (tipoCategoria.includes('película')) {
        return {
          ...base,
          duracion: item.duracion
        };
      } else if (tipoCategoria.includes('serie')) {
        return {
          ...base,
          temporadas: item.temporadas,
          resumen: item.resumen
        };
      } else {
        return base; // Por si es otra categoría
      }
    });

    res.json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};
