require("dotenv").config();
const app = require("./app");
const { sequelize, User } = require("./models");
const bcrypt = require("bcrypt");

const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    // Crear administrador por defecto si no existe ninguno
    const adminCount = await User.count({ where: { role: "administrador" } });
    if (adminCount === 0) {
        const hashedPassword = await bcrypt.hash("admin123", 10);
        await User.create({
            name: "Administrador Sistema",
            email: "admin@sistema.com",
            password: hashedPassword,
            role: "administrador"
        });
        console.log("Usuario administrador por defecto creado: admin@sistema.com / admin123");
    }

    app.listen(port, "0.0.0.0", () => {
      console.log(`API running on http://localhost:${port}`);
    });
  } catch (e) {
    console.error("DB error:", e);
    process.exit(1);
  }
})();