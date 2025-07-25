
const Categoria = require('./categoria');
const Genero = require('./genero');
const Catalogo = require('./catalogo');
const Tagscatalogo = require('./tagscatalogo');
const Tags = require('./tag');
const Reparto = require('./reparto');
const Actor = require('./actor');
const Ranking = require('./ranking');

// Relaciones
Catalogo.belongsTo(Categoria, { 
    foreignKey: 'idCategoria',
    as: 'Categoria' 
});

Catalogo.belongsTo(Genero, {
  foreignKey: 'idGenero',
  as: 'Genero'
});

Catalogo.belongsToMany(Actor, {
  through: Reparto,
  foreignKey: 'idCatalogo',
  as: 'Actores'
});

Actor.belongsToMany(Catalogo, {
  through: Reparto,
  foreignKey: 'idActores',
  as: 'Catalogos'
});

Catalogo.belongsToMany(Tags, {
  through: Tagscatalogo,
  foreignKey: 'idCatalogo',
  as: 'Tags'
});

Tags.belongsToMany(Catalogo, {
  through: Tagscatalogo,
  foreignKey: 'idTags',
  as: 'Catalogos'
});


Catalogo.hasMany(Ranking, {
  foreignKey: 'peliculaID',
  as: 'Rankings',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Ranking.belongsTo(Catalogo, {
  foreignKey: 'peliculaID',
  as: 'Catalogo',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});


module.exports = {
    Categoria,
    Genero,
    Catalogo,
    Tagscatalogo,
    Tags,
    Reparto,
    Tagscatalogo,
    Actor,
    Ranking
};