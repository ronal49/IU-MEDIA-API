const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { verifyToken, isAdmin } = require("../middlewares/auth.middleware");

// Requerimiento 8: Administrador crea usuarios
router.post("/register", verifyToken, isAdmin, authController.register);
router.post("/login", authController.login);

module.exports = router;
