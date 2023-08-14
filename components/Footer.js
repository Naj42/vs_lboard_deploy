import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {/* Social media links with icons */}
        <a href="#" className={styles.icon}>
          <FaFacebook />
        </a>
        <a href="#" className={styles.icon}>
          <FaTwitter />
        </a>
        <a href="#" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="#" className={styles.icon}>
          <FaLinkedin />
        </a>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
