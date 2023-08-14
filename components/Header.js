// Header.js
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* White-bordered container */}
      <a href='https://en.wikipedia.org/wiki/Lego'>
      <div className={styles.logoContainer}>
        {/* Image of the Lego brick */}
        <img
          src="/Lego01.png" // Update the path to the Lego image
          alt="Lego Brick"
          className={styles.legoImage}
        />
      </div>
      </a>

    {/* Text in the middle of the header */}
      <div className={styles.headerText}>Lego Logo</div>

      <nav
        className={`${styles['nav-container']} ${isMenuOpen ? styles.open : ''}`}
      >
        <ul className={styles['nav-list']}>
          <li><a href="https://en.wikipedia.org/wiki/Home_(2021_film)">Home</a></li>
          <li><a href="https://www.imdb.com/title/tt2194499/">About</a></li>
          <li><a href="https://www.youtube.com/watch?v=tAGnKpE4NCI&ab_channel=Metallica">Nothing else matters</a></li>
        </ul>
      </nav>
      <div
        className={`${styles['menu-toggle']} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
}

export default Header;
