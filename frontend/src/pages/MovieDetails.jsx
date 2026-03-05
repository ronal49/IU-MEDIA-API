import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Play, ArrowLeft, Star, Clock, Calendar } from 'lucide-react';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await axios.get(`/api/media/${id}`);
                setMovie(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movie:', error);
                setLoading(false);
            }
        };
        fetchMovie();
    }, [id]);

    if (loading) return <div className="loading-details">Cargando detalles...</div>;
    if (!movie) return <div className="error-details">Película no encontrada.</div>;

    return (
        <div className="movie-details animate-fade-in">
            <button className="back-btn" onClick={() => navigate(-1)}>
                <ArrowLeft size={24} />
            </button>

            <div className="details-hero">
                <img src={movie.imageUrl || 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070'} alt={movie.title} />
                <div className="details-overlay" />
            </div>

            <div className="details-content premium-container">
                <div className="details-grid">
                    <div className="info-main">
                        <h1>{movie.title}</h1>
                        <div className="meta-info">
                            <span className="year"><Calendar size={16} /> {movie.year}</span>
                            <span className="duration"><Clock size={16} /> 128 min</span>
                            <span className="genre">{movie.Genre?.name}</span>
                        </div>

                        <p className="synopsis">{movie.synopsis}</p>

                        <div className="actions">
                            <button className="btn-play-large">
                                <Play fill="black" size={24} /> Ver Ahora
                            </button>
                        </div>
                    </div>

                    <div className="info-sidebar glass">
                        <div className="sidebar-section">
                            <h4>Director</h4>
                            <p>{movie.Director?.name || 'Desconocido'}</p>
                        </div>
                        <div className="sidebar-section">
                            <h4>Productora</h4>
                            <p>{movie.Producer?.name || 'MOLA Films'}</p>
                        </div>
                        <div className="sidebar-section">
                            <h4>Género</h4>
                            <p>{movie.Genre?.name}</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .movie-details {
          position: relative;
          min-height: 100vh;
          background: var(--bg-color);
        }

        .back-btn {
          position: fixed;
          top: 80px;
          left: 4%;
          z-index: 100;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .back-btn:hover { background: var(--primary-color); color: black; }

        .details-hero {
          height: 60vh;
          width: 100%;
          position: relative;
        }

        .details-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .details-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, var(--bg-color) 0%, transparent 100%);
        }

        .details-content {
          margin-top: -15vh;
          position: relative;
          z-index: 10;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .info-main h1 {
          font-size: 3.5rem;
          margin-bottom: 10px;
          font-weight: 800;
          color: var(--primary-color);
        }

        .meta-info {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          color: var(--text-secondary);
          font-size: 1rem;
          align-items: center;
        }

        .meta-info span { display: flex; align-items: center; gap: 8px; }

        .synopsis {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #e5e5e5;
          margin-bottom: 40px;
        }

        .btn-play-large {
          background: var(--primary-color);
          color: black;
          padding: 15px 45px;
          border-radius: var(--border-radius);
          font-size: 1.2rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: var(--transition-smooth);
        }

        .btn-play-large:hover { transform: scale(1.05); filter: brightness(1.1); }

        .info-sidebar {
          padding: 30px;
          border-radius: var(--border-radius);
          height: fit-content;
        }

        .sidebar-section { margin-bottom: 25px; }
        .sidebar-section h4 { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; }
        .sidebar-section p { font-size: 1.1rem; font-weight: 500; }

        .loading-details, .error-details {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          color: white;
        }

        @media (max-width: 900px) {
          .details-grid { grid-template-columns: 1fr; }
          .info-main h1 { font-size: 2.5rem; }
        }
      `}</style>
        </div>
    );
};

export default MovieDetails;
