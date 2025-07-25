const Ranking = require('../../models/ranking');
const Catalogo = require('../../models/catalogo');

module.exports = async(req, res)=>{
    try{
        const ranking = await Ranking.findAll({
            include : [
                {
                    model : Catalogo,
                    as : 'Catalogo',
                    attributes : ['titulo']
                }
            ]
        });
        res.json(ranking)
    }catch(error){
        console.error('Error al obtener el ranking:', error);
        res.status(500).json({error: error.message})
    }
}