// File: src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">© 2025 16 Ways</div>
      <div className="footer-icons">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
      </div>
    </footer>
  );
}

export default Footer;