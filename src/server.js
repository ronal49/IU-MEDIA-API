console.log(">>> server.js arrancó");
console.log(">>> __filename:", __filename);
console.log(">>> cwd:", process.cwd());
console.log(">>> server.js está corriendo");

require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models");

const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(port, () => {
      console.log(`API running on http://localhost:${port}`);
    });
  } catch (e) {
    console.error("DB error:", e);
    process.exit(1);
  }
})();