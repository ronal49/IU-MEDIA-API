const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Inventario = sequelize.define("Inventario", {
  serial: { type: DataTypes.STRING, unique: true, allowNull: false },
  modelo: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING },
  foto: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  fechaCompra: { type: DataTypes.DATE },
  precio: { type: DataTypes.FLOAT },
});

module.exports = Inventario;
