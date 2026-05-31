const sequelize = require("../config/db");
const Genre = require("./Genre");
const Director = require("./Director");
const Producer = require("./Producer");
const Type = require("./Type");
const Media = require("./Media");
const User = require("./User");
const Inventario = require("./Inventario");
const EstadoEquipo = require("./EstadoEquipo");
const Marca = require("./Marca");
const TipoEquipo = require("./TipoEquipo");

// Asociaciones
Media.belongsTo(Genre, { foreignKey: "genreId", as: "genre" });
Media.belongsTo(Director, { foreignKey: "directorId", as: "director" });
Media.belongsTo(Producer, { foreignKey: "producerId", as: "producer" });
Media.belongsTo(Type, { foreignKey: "typeId", as: "type" });

Genre.hasMany(Media, { foreignKey: "genreId" });
Director.hasMany(Media, { foreignKey: "directorId" });
Producer.hasMany(Media, { foreignKey: "producerId" });
Type.hasMany(Media, { foreignKey: "typeId" });

// Inventario relations
Inventario.belongsTo(User, { foreignKey: "usuarioId" });
Inventario.belongsTo(Marca, { foreignKey: "marcaId" });
Inventario.belongsTo(EstadoEquipo, { foreignKey: "estadoEquipoId" });
Inventario.belongsTo(TipoEquipo, { foreignKey: "tipoEquipoId" });

User.hasMany(Inventario, { foreignKey: "usuarioId" });
Marca.hasMany(Inventario, { foreignKey: "marcaId" });
EstadoEquipo.hasMany(Inventario, { foreignKey: "estadoEquipoId" });
TipoEquipo.hasMany(Inventario, { foreignKey: "tipoEquipoId" });

module.exports = { sequelize, Genre, Director, Producer, Type, Media, User, Inventario, EstadoEquipo, Marca, TipoEquipo };
