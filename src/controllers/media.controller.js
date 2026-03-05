const { Media, Genre, Director, Producer, Type } = require("../models");

const getAll = async (req, res) => {
    try {
        const items = await Media.findAll({
            include: [
                { model: Genre, as: "genre" },
                { model: Director, as: "director" },
                { model: Producer, as: "producer" },
                { model: Type, as: "type" },
            ],
        });
        res.json(items);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const getById = async (req, res) => {
    try {
        const item = await Media.findByPk(req.params.id, {
            include: [
                { model: Genre, as: "genre" },
                { model: Director, as: "director" },
                { model: Producer, as: "producer" },
                { model: Type, as: "type" },
            ],
        });
        if (!item) return res.status(404).json({ error: "No encontrado" });
        res.json(item);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const create = async (req, res) => {
    try {
        const item = await Media.create(req.body);
        res.status(201).json(item);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const update = async (req, res) => {
    try {
        const item = await Media.findByPk(req.params.id);
        if (!item) return res.status(404).json({ error: "No encontrado" });
        await item.update(req.body);
        res.json(item);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const remove = async (req, res) => {
    try {
        const item = await Media.findByPk(req.params.id);
        if (!item) return res.status(404).json({ error: "No encontrado" });
        await item.destroy();
        res.json({ message: "Eliminado correctamente" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

module.exports = { getAll, getById, create, update, remove };
