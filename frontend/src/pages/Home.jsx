import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [mediaRes, genresRes] = await Promise.all([
                    axios.get('/api/media'),
                    axios.get('/api/genres')
                ]);
                setMovies(mediaRes.data);
                setFilteredMovies(mediaRes.data);
                setGenres(genresRes.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleGenreFilter = (genreName) => {
        setSelectedGenre(genreName);
        if (genreName === 'All') {
            setFilteredMovies(movies);
        } else {
            const filtered = movies.filter(m => m.Genre?.name === genreName);
            setFilteredMovies(filtered);
        }
    };

    if (loading) return <div className="loading">Cargando MOLA...</div>;

    return (
        <div className="home-page animate-fade-in">
            <Hero movies={movies.slice(0, 6)} />

            <div className="filter-bar premium-container">
                <h3>Explorar por Género</h3>
                <div className="genre-tags">
                    <button
                        className={selectedGenre === 'All' ? 'active' : ''}
                        onClick={() => handleGenreFilter('All')}
                    >
                        Todos
                    </button>
                    {genres.map(genre => (
                        <button
                            key={genre.id}
                            className={selectedGenre === genre.name ? 'active' : ''}
                            onClick={() => handleGenreFilter(genre.name)}
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="rows-section">
                {selectedGenre === 'All' ? (
                    <>
                        <MovieRow title="Tendencias en Colombia" movies={movies.slice(0, 8)} />
                        <MovieRow title="Cine Regional" movies={movies.slice(8, 16)} />
                        <MovieRow title="Nuevos Estrenos" movies={movies.slice(16, 24)} />
                    </>
                ) : (
                    <MovieRow title={`Resultados para ${selectedGenre}`} movies={filteredMovies} />
                )}
            </div>

        </div>
    );
};

export default Home;
