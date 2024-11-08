import React from 'react';
import Link from 'next/link';
import styles from './CharacterCard.module.css'; 

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, image, status, species, gender }) => {
  return (
    <Link href={`/characters/${id}`} className={styles.cardContainer}>
      <div>
        <img className={styles.cardImage} src={image} alt={name} />
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{name}</div>
          <p className={styles.cardText}>Status: {status}</p>
          <p className={styles.cardText}>Espécie: {species}</p>
          <p className={styles.cardText}>Gênero: {gender}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
