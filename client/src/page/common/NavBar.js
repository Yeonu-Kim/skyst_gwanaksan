// NavBar.js
import React from 'react';
import styles from './NavBar.module.css'; 
import { FaInstagram, FaFacebookF, FaShareSquare } from 'react-icons/fa';

const NavBar = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          LOVE
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
          <div>
            {/* Link to Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
    
            {/* Link to Facebook */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
    
            {/* Link to our website */}
            <a href="http://ec2-34-228-60-199.compute-1.amazonaws.com/" className={styles.socialIcon}>
              <FaShareSquare />
            </a>
          </div>
        </div>
        <div className={styles.team}>
          SKYST 2nd 관악산팀
        </div>
  
        
      </div>
    );
  };

export { NavBar, Footer };
