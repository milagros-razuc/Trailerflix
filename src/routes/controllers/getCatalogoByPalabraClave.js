const catalogo = require('../../models/catalogo');
const {Op} = require('sequelize');


// 14. Buscar películas por palabra clave en título o descripción (por ejemplo: "Aventura", "madre", "Ambientada").
module.exports = async (req, res) => {
    try {
        const palabraClave = req.params.palabraClave;
        if (!palabraClave) {
            return res.status(400).json({ message: 'Palabra clave es requerida' });
        }

        const results = await catalogo.findAll({
            where: {
                [Op.or]: [
                    { titulo: { [Op.like]: `%${palabraClave}%` } },
                    { resumen: { [Op.like]: `%${palabraClave}%` } }
                ],
                [Op.and]: [
                    { idCategoria: 1 } // Aseguramos que sea una película,
                ]
            }
        });
        res.status(200).json(results); 
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}