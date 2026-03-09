const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Media = sequelize.define("Media", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER },
    synopsis: { type: DataTypes.TEXT },
    genreId: { type: DataTypes.INTEGER },
    directorId: { type: DataTypes.INTEGER },
    producerId: { type: DataTypes.INTEGER },
    typeId: { type: DataTypes.INTEGER },
    imageUrl: { type: DataTypes.STRING },
    videoUrl: { type: DataTypes.STRING },
    embedUrl: { type: DataTypes.STRING },
});

module.exports = Media;
