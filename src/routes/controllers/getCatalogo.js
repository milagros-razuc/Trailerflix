// src/routes/controllers/getCatalogo.js
const { Catalogo, Categoria, Genero } = require('../../models');

module.exports = async (req, res) => {
  try {
    const pelis = await Catalogo.findAll({
      include: [
        { model: Categoria, as: 'Categoria', attributes: ['nombreCategoria'] },
        { model: Genero, as: 'Genero', attributes: ['Nombre'] }
      ]
    });

    // EJS espera que "categoria" y "genero" estén como propiedades simples:
    const pelisFormateadas = pelis.map(p => ({
      titulo: p.titulo,
      poster: p.poster,
      resumen: p.resumen,
      categoria: p.Categoria?.nombreCategoria || 'Sin categoría',
      genero: p.Genero?.Nombre || 'Sin género'
    }));

    res.render('catalogo', { pelis: pelisFormateadas });
  } catch (error) {
    console.error('Error al obtener catálogo:', error);
    res.status(500).render('404', { error: 'No se pudo cargar el catálogo' });
  }
};
