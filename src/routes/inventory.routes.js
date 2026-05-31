const { verifyToken, isAdmin } = require("../middlewares/auth.middleware");
const { Inventario, EstadoEquipo, Marca, TipoEquipo } = require("../models");
const express = require("express");
const router = express.Router();

// Controladores genéricos
const makeCRUD = (Model) => {
    return {
        getAll: async (req, res) => {
            try { res.json(await Model.findAll()); } catch (error) { res.status(500).json({ error: "Error de servidor" }); }
        },
        create: async (req, res) => {
            try { res.status(201).json(await Model.create(req.body)); } catch (error) { res.status(400).json({ error: "Error al crear" }); }
        }
    };
};

const invCtrl = makeCRUD(Inventario);
const estCtrl = makeCRUD(EstadoEquipo);
const marCtrl = makeCRUD(Marca);
const tipCtrl = makeCRUD(TipoEquipo);

// --- ESTADOS DE EQUIPOS --- (Sólo Administrador)
router.get("/estados", verifyToken, isAdmin, estCtrl.getAll);
router.post("/estados", verifyToken, isAdmin, estCtrl.create);

// --- MARCAS --- (Sólo Administrador)
router.get("/marcas", verifyToken, isAdmin, marCtrl.getAll);
router.post("/marcas", verifyToken, isAdmin, marCtrl.create);

// --- TIPOS DE EQUIPOS --- (Sólo Administrador)
router.get("/tipos-equipos", verifyToken, isAdmin, tipCtrl.getAll);
router.post("/tipos-equipos", verifyToken, isAdmin, tipCtrl.create);

// --- INVENTARIOS --- 
// Visualizar: Docente y Administrador (verifyToken reicht porque auth.middleware rechazaría sin token)
router.get("/inventarios", verifyToken, invCtrl.getAll);

// Creación de inventarios: Solo Administrador
router.post("/inventarios", verifyToken, isAdmin, invCtrl.create);

module.exports = router;
