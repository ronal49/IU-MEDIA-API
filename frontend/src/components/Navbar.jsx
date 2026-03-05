import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo">
                    MOLA<span>STREAM</span>
                </Link>

                <div className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/">Series</Link>
                    <Link to="/">Películas</Link>
                    <Link to="/">Novedades populares</Link>
                </div>

                <div className="nav-actions">
                    <div className="search-box">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Títulos, personas, géneros"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="user-profile">
                        <User size={24} />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          height: 68px;
          transition: var(--transition-smooth);
          background: linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, transparent);
          padding: 0 4%;
          display: flex;
          align-items: center;
        }

        .navbar.scrolled {
          background-color: var(--bg-color);
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .nav-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          color: var(--primary-color);
          letter-spacing: -1px;
        }

        .logo span {
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          margin-left: 40px;
        }

        .nav-links a {
          font-size: 14px;
          color: #e5e5e5;
          transition: var(--transition-smooth);
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .search-box {
          display: flex;
          align-items: center;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 5px 12px;
          border-radius: 4px;
          gap: 10px;
        }

        .search-box input {
          background: transparent;
          border: none;
          color: white;
          font-size: 14px;
          outline: none;
          width: 200px;
        }

        .user-profile {
          cursor: pointer;
          color: white;
          background: #333;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          transition: var(--transition-smooth);
        }

        .user-profile:hover {
          background: var(--primary-color);
          color: black;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .search-box input { width: 0; padding: 0; opacity: 0; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
