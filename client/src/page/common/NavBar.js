// NavBar.js
import React from 'react';
import styles from './NavBar.module.css'; 
import { FaInstagram, FaFacebookF, FaShareSquare } from 'react-icons/fa';

const NavBar = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          LOGO
        </div>
    </header>
  );
};

const Footer = () => {
    return (
      <div className={styles.footer}>
        
        <div className={styles.socialLinks}>
        <div className={styles.label}>
          Share with
        </div>
          {/* Link to Instagram */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaInstagram />
          </a>
  
          {/* Link to Facebook */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaFacebookF />
          </a>
  
          {/* Link to share */}
          <a href="" className={styles.socialIcon}>
            <FaShareSquare />
          </a>
        </div>
        <div className={styles.team}>
          SKYST 2nd 관악산팀
        </div>
  
        
      </div>
    );
  };

export { NavBar, Footer };
