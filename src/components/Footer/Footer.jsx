import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Created by{' '}
        <a 
          href="https://github.com/aidacarabot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          Aida Carabot
        </a> 
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
};


export default Footer