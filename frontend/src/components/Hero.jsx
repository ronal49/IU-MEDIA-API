import React, { useState, useEffect } from 'react';
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(movies.length, 6));
    }, 8000);
    return () => clearInterval(timer);
  }, [movies]);

  if (!movies || movies.length === 0) return <div className="hero-placeholder" />;

  const currentMovie = movies[currentIndex];

  return (
    <div className="hero">
      <div className="hero-background">
        <img src={currentMovie.imageUrl || 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070'} alt={currentMovie.title} />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content premium-container">
        <h1 className="animate-fade-in">{currentMovie.title}</h1>
        <p className="animate-fade-in">{currentMovie.synopsis}</p>

        <div className="hero-btns animate-fade-in">
          <button className="btn-play">
            <Play fill="black" size={24} />
            Reproducir
          </button>
          <button className="btn-info">
            <Info size={24} />
            Más información
          </button>
        </div>
      </div>

      <div className="hero-indicators">
        {[...Array(Math.min(movies.length, 6))].map((_, i) => (
          <div
            key={i}
            className={`indicator ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;
