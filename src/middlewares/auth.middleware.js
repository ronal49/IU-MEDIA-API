const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "secreto_super_seguro";

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

    if (!token) {
        return res.status(403).json({ error: "No se proporcionó un token de autenticación." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // { id, email, role }
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido o expirado." });
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "administrador") {
        next();
    } else {
        return res.status(403).json({ error: "Acceso denegado. Se requiere rol de administrador." });
    }
};
