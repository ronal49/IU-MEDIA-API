const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Marca = sequelize.define("Marca", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  estado: { type: DataTypes.ENUM("Activo", "Inactivo"), defaultValue: "Activo" }
});

module.exports = Marca;
