const { Genre, Director, Producer, Type } = require("../models");

async function validateMediaRefs({ genre_id, director_id, producer_id, type_id }) {
  const genre = await Genre.findByPk(genre_id);
  if (!genre) return { ok: false, msg: "Género no existe" };
  if (genre.status !== "ACTIVO") return { ok: false, msg: "Género debe estar ACTIVO" };

  const director = await Director.findByPk(director_id);
  if (!director) return { ok: false, msg: "Director no existe" };
  if (director.status !== "ACTIVO") return { ok: false, msg: "Director debe estar ACTIVO" };

  const producer = await Producer.findByPk(producer_id);
  if (!producer) return { ok: false, msg: "Productora no existe" };
  if (producer.status !== "ACTIVO") return { ok: false, msg: "Productora debe estar ACTIVO" };

  const type = await Type.findByPk(type_id);
  if (!type) return { ok: false, msg: "Tipo no existe" };

  return { ok: true };
}

module.exports = { validateMediaRefs };