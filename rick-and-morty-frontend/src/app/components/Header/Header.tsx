import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.headerContainer}>
    <div className={styles.textCenter}>
      <h1 className={styles.title}>Rick and Morty</h1>
      <p className={styles.subtitle}>Explore todos os personagens da série com suas informações!</p>
    </div>
  </header>
);

export default Header;
