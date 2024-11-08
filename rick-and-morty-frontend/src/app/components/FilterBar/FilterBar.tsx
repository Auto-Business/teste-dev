import React from 'react';
import styles from './FilterBar.module.css'; 

interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  speciesFilter: string;
  setSpeciesFilter: (value: string) => void;
  genderFilter: string;
  setGenderFilter: (value: string) => void;
  allStatuses: string[];
  allSpecies: string[];
  allGenders: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  speciesFilter,
  setSpeciesFilter,
  genderFilter,
  setGenderFilter,
  allStatuses,
  allSpecies,
  allGenders,
}) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Digitando no input:', e.target.value);
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className={styles.filterBarContainer}>
      <input
        type="text"
        placeholder="Pesquisar por nome"
        className={styles.input}
        value={search}
        onChange={handleInputChange}
        aria-label="Pesquisar por nome"
      />

    <select
      className={styles.select}
      value={statusFilter}
      onChange={(e) => {
        setStatusFilter(e.target.value);
      }}
      aria-label="Filtro de status"
    >
      <option value="">Todos os Status</option>
      {allStatuses.map((status, index) => (
        <option key={index} value={status}>{status}</option>
      ))}
    </select>

    <select
      className={styles.select}
      value={speciesFilter}
      onChange={(e) => {
        setSpeciesFilter(e.target.value);
      }}
      aria-label="Filtro de espécies"
    >
      <option value="">Todas as Espécies</option>
      {allSpecies.map((species, index) => (
        <option key={index} value={species}>{species}</option>
      ))}
    </select>

    <select
      className={styles.select}
      value={genderFilter}
      onChange={(e) => {
        setGenderFilter(e.target.value);
      }}
      aria-label="Filtro de gênero"
    >
      <option value="">Todos os Gêneros</option>
      {allGenders.map((gender, index) => (
        <option key={index} value={gender}>{gender}</option>
      ))}
    </select>
  </div>
  );
};

export default FilterBar;
