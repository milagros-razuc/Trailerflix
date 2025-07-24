const Catalogo = require('../../models/catalogo');
const Actor = require('../../models/actor');

//Contar cuántas películas/series trabajó el actor Chris Pratt.

module.exports = async (req, res) => {
  try {
    const actor = await Actor.findOne({
      where: { nombreCompleto: 'Chris Pratt' },
      include: {
        model: Catalogo,
        as: 'Catalogos',
        through: { attributes: [] },
      },
    });

    if (!actor) {
      return res.status(404).json({ error: 'Actor no encontrado' });
    }

    res.json({
      actor: actor.nombreCompleto,
      cantidadPeliculasSeries: actor.Catalogos.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al contar películas/series del actor' });
  }
};
