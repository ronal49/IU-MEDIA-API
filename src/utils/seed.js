const { sequelize, Genre, Director, Producer, Type, Media } = require("../models");

const seed = async () => {
    try {
        // Sincronizar (limpiar o asegurar tablas)
        await sequelize.sync({ force: true });
        console.log("DB sincronizada...");

        // 1. Tipos
        const typePelicula = await Type.create({ name: "Película" });
        const typeSerie = await Type.create({ name: "Serie" });

        // 2. Géneros
        const drama = await Genre.findOrCreate({ where: { name: "Drama" } }).then(([g]) => g);
        const comedia = await Genre.findOrCreate({ where: { name: "Comedia" } }).then(([g]) => g);
        const horror = await Genre.findOrCreate({ where: { name: "Horror" } }).then(([g]) => g);
        const romance = await Genre.findOrCreate({ where: { name: "Romance" } }).then(([g]) => g);
        const accion = await Genre.findOrCreate({ where: { name: "Acción" } }).then(([g]) => g);
        const aventura = await Genre.findOrCreate({ where: { name: "Aventura" } }).then(([g]) => g);
        const belico = await Genre.findOrCreate({ where: { name: "Bélico" } }).then(([g]) => g);
        const western = await Genre.findOrCreate({ where: { name: "Western" } }).then(([g]) => g);

        // 3. Directores
        const george = await Director.findOrCreate({ where: { name: "George A. Romero" } }).then(([d]) => d);
        const howard = await Director.findOrCreate({ where: { name: "Howard Hawks" } }).then(([d]) => d);
        const buster = await Director.findOrCreate({ where: { name: "Buster Keaton" } }).then(([d]) => d);
        const varios = await Director.findOrCreate({ where: { name: "Varios" } }).then(([d]) => d);

        // 4. Productoras
        const archive = await Producer.findOrCreate({ where: { name: "Internet Archive" } }).then(([p]) => p);
        const crisron = await Producer.findOrCreate({ where: { name: "CRISRON Films" } }).then(([p]) => p);

        // 5. Contenido (Películas de Archive.org)
        await Media.create({
            title: "Night of the Living Dead",
            year: 1968,
            synopsis: "Un grupo de personas se refugia en una granja mientras hordas de muertos vivientes hambrientos de carne los acechan fuera.",
            genreId: horror.id,
            directorId: george.id,
            producerId: archive.id,
            typeId: typePelicula.id,
            imageUrl: "https://archive.org/download/night-of-the-living-dead_1968/__ia_thumb.jpg",
            videoUrl: "https://archive.org/download/night-of-the-living-dead_1968/Night%20of%20the%20Living%20Dead%20-%20(1968).mp4",
            embedUrl: "https://archive.org/embed/night-of-the-living-dead_1968"
        });

        await Media.create({
            title: "His Girl Friday",
            year: 1940,
            synopsis: "Comedia romántica sobre un editor de periódicos que intenta evitar que su ex esposa se vuelva a casar.",
            genreId: comedia.id,
            directorId: howard.id,
            producerId: archive.id,
            typeId: typePelicula.id,
            imageUrl: "https://archive.org/download/his_girl_friday/__ia_thumb.jpg",
            videoUrl: "https://archive.org/download/his_girl_friday/his_girl_friday.mp4",
            embedUrl: "https://archive.org/embed/his_girl_friday"
        });

        await Media.create({
            title: "The General",
            year: 1926,
            synopsis: "Un maquinista de tren se enfrenta a espías de la Unión en esta obra maestra del cine mudo dirigida por Buster Keaton.",
            genreId: accion.id,
            directorId: buster.id,
            producerId: archive.id,
            typeId: typePelicula.id,
            imageUrl: "https://archive.org/download/TheGeneral720p1926/__ia_thumb.jpg",
            videoUrl: "https://archive.org/download/TheGeneral720p1926/TheGeneral720p.mp4",
            embedUrl: "https://archive.org/embed/TheGeneral720p1926"
        });

        await Media.create({
            title: "Nosferatu",
            year: 1922,
            synopsis: "El clásico de terror de F.W. Murnau, la primera transposición fílmica del mito de Drácula.",
            genreId: horror.id,
            directorId: varios.id,
            producerId: archive.id,
            typeId: typePelicula.id,
            imageUrl: "https://archive.org/download/nosferatu_201508/__ia_thumb.jpg",
            videoUrl: "https://archive.org/download/nosferatu_201508/dom-6567newnosferatu.mp4",
            embedUrl: "https://archive.org/embed/nosferatu_201508"
        });

        console.log("¡Base de Datos Poblada con éxito! 🇨🇴🎬");
        process.exit(0);
    } catch (e) {
        console.error("Error en el seed:", e);
        process.exit(1);
    }
};

seed();
