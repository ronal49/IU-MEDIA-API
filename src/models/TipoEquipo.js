const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TipoEquipo = sequelize.define("TipoEquipo", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  estado: { type: DataTypes.ENUM("Activo", "Inactivo"), defaultValue: "Activo" }
});

module.exports = TipoEquipo;
