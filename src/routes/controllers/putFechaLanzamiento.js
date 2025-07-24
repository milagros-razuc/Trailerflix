const catalogo = require('../../models/catalogo');
const Genero = require('../../models/genero');

// 13. Agregar el campo fecha_lanzamiento (tipo DATE) a la tabla de trabajos fílmicos y actualizar las fechas de los títulos del género "Aventura".
module.exports = async (req, res) => {
    try {
        const generoAventura = await Genero.findOne({ where: { Nombre: 'Aventura' } });

        // Actualizar los títulos del género "Aventura" con una fecha de lanzamiento ficticia
        const updated = await catalogo.update(
            { fecha_lanzamiento: new Date('2025-01-01') }, // Fecha ficticia
            { where: { idGenero: generoAventura.idGenero } }
        );

        res.status(200).json({ message: `${updated[0]} titulos actualizados existosamente` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}