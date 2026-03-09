const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/media", require("./routes/media.routes"));
app.use("/api/genres", require("./routes/genres.routes"));
app.use("/api/directors", require("./routes/directors.routes"));
app.use("/api/producers", require("./routes/producers.routes"));
app.use("/api/types", require("./routes/types.routes"));

// Ruta raíz
app.get("/", (req, res) => {
    res.json({ message: "CRISRON MOVIES API funcionando 🎬", version: "1.0.0" });
});

module.exports = app;
