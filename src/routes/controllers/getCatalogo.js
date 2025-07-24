const catalogo = require('../../models/catalogo');

module.exports = async(req, res) =>{
    try{
        const Catalogo = await catalogo.findAll();
        res.status(200).json(Catalogo);
    }catch(error){
        res.status(500).json({error:'error al buscar el catalogo'});
    }
};