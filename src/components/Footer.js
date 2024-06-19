// src/Footer.js

import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Linedoc</h4>
          <ul className="footer-links">
            <li><a href="/about">Tentang Kita</a></li>
            <li><a href="/team">Tim Kita</a></li>
            <li><a href="/careers">Karier</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><a href="/contact">Kontak</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Support Center</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><a href="/privacy">Kebijakan privasi</a></li>
            <li><a href="/terms">Layanan</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Linedoc. Solusi Kesehatan Terlengkap</p>
      </div>
    </footer>
  );
}

export default Footer;

