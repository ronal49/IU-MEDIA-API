require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models");

const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(port, "0.0.0.0", () => {
      console.log(`API running on http://localhost:${port}`);
    });
  } catch (e) {
    console.error("DB error:", e);
    process.exit(1);
  }
})();