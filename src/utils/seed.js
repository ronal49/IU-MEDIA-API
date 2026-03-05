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
        const drama = await Genre.create({ name: "Drama" });
        const comedia = await Genre.create({ name: "Comedia" });
        const documental = await Genre.create({ name: "Documental" });
        const accion = await Genre.create({ name: "Acción" });

        // 3. Directores
        const sergio = await Director.create({ name: "Sergio Cabrera" });
        const victor = await Director.create({ name: "Víctor Gaviria" });
        const ciro = await Director.create({ name: "Ciro Guerra" });
        const varios = await Director.create({ name: "Varios" });

        // 4. Productoras
        const rtvc = await Producer.create({ name: "RTVCPlay" });
        const caracol = await Producer.create({ name: "Caracol Televisión" });
        const dynamo = await Producer.create({ name: "Dynamo" });

        // 5. Contenido (Películas/Series gratuitas o icónicas accesibles en RTVCPlay/YouTube)
        await Media.create({
            title: "La Estrategia del Caracol",
            year: 1993,
            synopsis: "Un clásico del cine colombiano sobre vecinos que defienden su hogar de forma ingeniosa.",
            genreId: comedia.id,
            directorId: sergio.id,
            producerId: rtvc.id,
            typeId: typePelicula.id,
            imageUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070"
        });

        await Media.create({
            title: "Rodrigo D: No Futuro",
            year: 1990,
            synopsis: "Drama crudo sobre la juventud en Medellín durante los años 80.",
            genreId: drama.id,
            directorId: victor.id,
            producerId: rtvc.id,
            typeId: typePelicula.id,
            imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2074"
        });

        await Media.create({
            title: "El Abrazo de la Serpiente",
            year: 2015,
            synopsis: "Un chamán amazónico y dos científicos buscan una planta sagrada durante décadas.",
            genreId: drama.id,
            directorId: ciro.id,
            producerId: dynamo.id,
            typeId: typePelicula.id,
            imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"
        });

        await Media.create({
            title: "Los Colores de la Montaña",
            year: 2010,
            synopsis: "La amistad de unos niños en medio del conflicto armado, intentando recuperar un balón.",
            genreId: drama.id,
            directorId: varios.id,
            producerId: rtvc.id,
            typeId: typePelicula.id,
            imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2050"
        });

        await Media.create({
            title: "Don Chinche",
            year: 1982,
            synopsis: "Serie icónica de la televisión colombiana que retrata la cultura popular de Bogotá.",
            genreId: comedia.id,
            directorId: varios.id,
            producerId: rtvc.id,
            typeId: typeSerie.id,
            imageUrl: "https://images.unsplash.com/photo-1542204172-3c3298132e0e?q=80&w=2070"
        });

        console.log("¡Base de Datos Poblada con éxito! 🇨🇴🎬");
        process.exit(0);
    } catch (e) {
        console.error("Error en el seed:", e);
        process.exit(1);
    }
};

seed();
