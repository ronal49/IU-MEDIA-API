const sequelize = require("../config/db");
const Genre = require("./Genre");
const Director = require("./Director");
const Producer = require("./Producer");
const Type = require("./Type");
const Media = require("./Media");

// Asociaciones
Media.belongsTo(Genre, { foreignKey: "genreId", as: "genre" });
Media.belongsTo(Director, { foreignKey: "directorId", as: "director" });
Media.belongsTo(Producer, { foreignKey: "producerId", as: "producer" });
Media.belongsTo(Type, { foreignKey: "typeId", as: "type" });

Genre.hasMany(Media, { foreignKey: "genreId" });
Director.hasMany(Media, { foreignKey: "directorId" });
Producer.hasMany(Media, { foreignKey: "producerId" });
Type.hasMany(Media, { foreignKey: "typeId" });

module.exports = { sequelize, Genre, Director, Producer, Type, Media };
