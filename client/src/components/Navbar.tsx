import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, LogIn, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-container container">
        <Link to="/" className="logo">
          <span className="gradient-text">PC-KINBA</span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#builder">PC Builder</a>
          </li>
          <li>
            <a href="#components">Components</a>
          </li>
          <li>
            <a href="#compare">Compare</a>
          </li>
          <li>
            <a href="#ai">AI Assistant</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => navigate('/search')}>
            <Search size={20} />
          </button>
          <button className="icon-btn">
            <Moon size={20} />
          </button>
          <button className="sign-in-btn">
            <LogIn size={18} /> Sign In
          </button>
          <button className="button-primary sign-up-btn">Sign Up</button>
        </div>
      </div>
    </motion.nav>
  );
}
