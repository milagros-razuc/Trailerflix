const express = require('express');
const router = express.Router();

const getAll = require('./controllers/getCatalogo');

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

router.get('/catalogo', getAll);
router.get('/catalogo/genero', getGenero);
router.get('/catalogo/genero/:id', getGeneroByPK);
router.get('/catalogo/tagsCombinados', getTagsCombinados);
router.get('/catalogo/resumen', getResumenMision);
router.get('/catalogo/series3temporadas',getSeries3Temp);
router.get('/actor/chris-pratt/trabajos', getTrabajosChrisPratt);

router.get('/catalogo/totalSeries', getTotalSeries);
router.get('/catalogo/seriesByTemporadas', getSeriesByTemporadas);
router.put('/catalogo/fechaLanzamiento', putFechaLanzamiento);
router.get('/catalogo/palabraClave/:palabraClave', getCatalogoByPalabraClave);


module.exports = router;