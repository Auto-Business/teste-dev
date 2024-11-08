"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard/CharacterCard';
import useScrollToTop from './hook/useScrollToTop';
import FilterBar from './components/FilterBar/FilterBar';
import Pagination from './components/Pagination/Pagination';
import Header from './components/Header/Header';
import { useFilters } from './hook/useFilters';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [allStatuses, setAllStatuses] = useState<string[]>([]);
  const [allSpecies, setAllSpecies] = useState<string[]>([]);
  const [allGenders, setAllGenders] = useState<string[]>([]);

  // Hook para gerenciar os filtros
  const { filters, updateFilter } = useFilters({ setPage });

  useScrollToTop(page);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/characters/filters`);
        setAllStatuses(response.data.statuses);
        setAllSpecies(response.data.species);
        setAllGenders(response.data.genders);
      } catch (error) {
        console.error('Erro ao buscar opções de filtros:', error);
      }
    };

    fetchFilterOptions();
  }, []);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('/api/characters', {
          params: {
            name: filters.search,
            status: filters.status,
            species: filters.species,
            gender: filters.gender,
            page: page,
            withCredentials: true,
          },
        });
        setCharacters(response.data.results || response.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [filters, page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) {
    return <p className="text-center text-green-400 font-bold">Carregando personagens...</p>;
  }

  return (
    <div className="min-h-screen bg-[#272B33] text-white">
      <Header />
      <div className="container mx-auto p-4">
        {/* Barra de Filtros */}
        <FilterBar
          search={filters.search}
          setSearch={(value) => updateFilter('search', value)}
          statusFilter={filters.status}
          setStatusFilter={(value) => updateFilter('status', value)}
          speciesFilter={filters.species}
          setSpeciesFilter={(value) => updateFilter('species', value)}
          genderFilter={filters.gender}
          setGenderFilter={(value) => updateFilter('gender', value)}
          allStatuses={allStatuses}
          allSpecies={allSpecies}
          allGenders={allGenders}
        />

        {/* Lista de Personagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.length > 0 ? (
            characters.map((character) => (
              <CharacterCard
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                species={character.species}
                gender={character.gender}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">
              Nenhum personagem encontrado. Tente ajustar os filtros ou a pesquisa.
            </div>
          )}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </div>
    </div>
  );
};

export default CharacterList;
