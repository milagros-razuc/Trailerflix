const catalogo = require('../../models/catalogo');

// 11. Contar la cantidad total de películas registradas
module.exports = async (req, res) => {
    try {
        const seriesCount = await catalogo.count(
            { where: { idCategoria : 11 } }
        );
        res.status(200).json({ seriesCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
