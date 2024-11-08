"use client"; // Marca o componente como Client Component

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import styles from './page.module.css';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
}

const CharacterDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter(); 
  const [id, setId] = useState<string | null>(null);
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams =  params;
      setId(Array.isArray(resolvedParams?.id) ? resolvedParams.id[0] : resolvedParams?.id || null);
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchCharacterDetails = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/characters/${id}`);
          setCharacter(response.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes do personagem:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchCharacterDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Carregando detalhes do personagem...</p>;
  }

  if (!character) {
    return <p>Personagem não encontrado.</p>;
  }

  return (
<div className={styles.container}>
  <div className={styles.nav}>
    <button className={styles.button} onClick={() => router.back()}>Voltar</button>
  </div>
  
    <div className={styles.flex}>
      <div className={styles.card}>
        <img src={character.image} alt={character.name} className={styles.image} />
        <div className={styles.info}>
          <h1 className={styles.name}>{character.name}</h1>
          <p className={styles.paragraph}><strong>Status:</strong> {character.status}</p>
          <p className={styles.paragraph}><strong>Espécie:</strong> {character.species}</p>
          <p className={styles.paragraph}><strong>Tipo:</strong> {character.type || 'N/A'}</p>
          <p className={styles.paragraph}><strong>Gênero:</strong> {character.gender}</p>
          <p className={styles.paragraph}><strong>Origem:</strong> {character.origin ? character.origin.name : 'Desconhecido'}</p>
          <p className={styles.paragraph}><strong>Última localização:</strong> {character.location ? character.location.name : 'Desconhecido'}</p>
        </div>
      </div>
    </div>

</div>
  );
};

export default CharacterDetails;
