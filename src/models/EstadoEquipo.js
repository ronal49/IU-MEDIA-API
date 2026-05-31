const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const EstadoEquipo = sequelize.define("EstadoEquipo", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  estado: { type: DataTypes.ENUM("Activo", "Inactivo"), defaultValue: "Activo" }
});

module.exports = EstadoEquipo;
