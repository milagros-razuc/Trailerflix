// 10 11 . Contar la cantidad total de películas o series según el idCategoria recibido
const Catalogo = require('../../models/catalogo');
const Categoria = require('../../models/categoria');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    // Buscamos la categoría por ID para saber qué nombre tiene
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    const total = await Catalogo.count({
      where: { idCategoria: id }
    });

    res.status(200).json({
      categoria: categoria.nombreCategoria,
      total
    });
  } catch (error) {
    console.error('Error al contar registros:', error);
    res.status(500).json({ error: 'Ocurrió un error al contar los registros.' });
  }
};
