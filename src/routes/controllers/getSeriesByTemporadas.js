const catalogo = require('../../models/catalogo');
// 12. Listar las series en orden descendente por cantidad de temporadas.
module.exports= async (req, res) => {
    try {
        const series = await catalogo.findAll({
            where: { idCategoria: 11 }, // id de la categoría "Series"
            order: [['temporadas', 'DESC']]
        });
        res.status(200).json(series);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}