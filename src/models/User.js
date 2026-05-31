const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "El nombre es obligatorio." },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: { msg: "Este correo ya está registrado." },
    validate: {
      isEmail: { msg: "Debe ser un correo electrónico válido." },
      notEmpty: { msg: "El correo es obligatorio." },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "La contraseña es obligatoria." },
    },
  },
  role: {
    type: DataTypes.ENUM("administrador", "docente"),
    defaultValue: "docente",
  },
}, {
  timestamps: true,
  createdAt: 'fechaDeCreacion',
  updatedAt: 'fechaDeModificacion'
});

module.exports = User;
