const { Producer } = require("../models");

const getAll = async (req, res) => {
    try { res.json(await Producer.findAll()); }
    catch (e) { res.status(500).json({ error: e.message }); }
};
const getById = async (req, res) => {
    try {
        const item = await Producer.findByPk(req.params.id);
        if (!item) return res.status(404).json({ error: "No encontrado" });
        res.json(item);
    } catch (e) { res.status(500).json({ error: e.message }); }
};
const create = async (req, res) => {
    try { res.status(201).json(await Producer.create(req.body)); }
    catch (e) { res.status(400).json({ error: e.message }); }
};
const update = async (req, res) => {
    try {
        const item = await Producer.findByPk(req.params.id);
        if (!item) return res.status(404).json({ error: "No encontrado" });
        await item.update(req.body);
        res.json(item);
    } catch (e) { res.status(400).json({ error: e.message }); }
};
const remove = async (req, res) => {
    try {
        const item = await Producer.findByPk(req.params.id);
        if (!item) return res.status(404).json({ error: "No encontrado" });
        await item.destroy();
        res.json({ message: "Eliminado correctamente" });
    } catch (e) { res.status(500).json({ error: e.message }); }
};

module.exports = { getAll, getById, create, update, remove };
