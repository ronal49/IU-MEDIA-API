import React from 'react';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img src={movie.imageUrl || 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070'} alt={movie.title} />
      <div className="card-overlay">
        <div className="card-info">
          <div className="play-icon">
            <Play fill="black" size={20} />
          </div>
          <h3>{movie.title}</h3>
          <div className="card-meta">
            <span>{movie.year}</span>
            <span className="rating">{movie.rating || '13+'}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MovieCard;
