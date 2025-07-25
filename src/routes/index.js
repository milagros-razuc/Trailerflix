const express = require('express');
const router = express.Router();

const getCatalogo = require('./controllers/getCatalogo');

const getTagsCombinados = require('./controllers/getTagsCombinados');
const getGenero = require('./controllers/getByGenero');
const getGeneroByPK = require('./controllers/getGeneroPK');
const getResumenMision = require('./controllers/getByResumen');
const getSeries3Temp = require('./controllers/getSeries3Temp');
const getTrabajosChrisPratt = require('./controllers/getTrabajosChrisPratt');


const getTotalSeries = require('./controllers/getTotalSeries');
const getSeriesByTemporadas = require('./controllers/getSeriesByTemporadas');
const putFechaLanzamiento = require('./controllers/putFechaLanzamiento');
const getCatalogoByPalabraClave = require('./controllers/getCatalogoByPalabraClave');
const getByMovie = require('./controllers/getCatalogoPorCategoria');

const getByActor = require('./controllers/getByActor')
const getByMostActor = require('./controllers/getByMostActor');

const getActor = require('./controllers/getActor');
const getRankingWithTitle = require('./controllers/getRankingWithTitle');

router.get('/catalogo', getCatalogo);
router.get('/catalogo/genero', getGenero);
router.get('/catalogo/genero/:id', getGeneroByPK);
router.get('/catalogo/tagsCombinados', getTagsCombinados);
router.get('/catalogo/resumen', getResumenMision);
router.get('/catalogo/series3temporadas',getSeries3Temp);
router.get('/actor/chris-pratt/trabajos', getTrabajosChrisPratt);

router.get('/catalogo/totalSeries-peliculas/:id', getTotalSeries);
router.get('/catalogo/seriesByTemporadas', getSeriesByTemporadas);
router.put('/catalogo/fechaLanzamiento', putFechaLanzamiento);
router.get('/catalogo/palabraClave/:palabraClave', getCatalogoByPalabraClave);

router.get('/catalogo/actor',getByActor);
router.get('/catalogo/actor/mayormenor',getByMostActor);
router.get('/catalogo/categoria/:id',getByMovie);

router.get('/actor', getActor);
router.get('/ranking', getRankingWithTitle);


module.exports = router;