import { useState, Dispatch, SetStateAction, useCallback, useEffect } from 'react';

interface Filters {
  search: string;
  status: string;
  species: string;
  gender: string;
}

interface UseFiltersProps {
  setPage: Dispatch<SetStateAction<number>>;
}

export const useFilters = ({ setPage }: UseFiltersProps) => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    status: '',
    species: '',
    gender: ''
  });

  const updateFilter = useCallback((key: keyof Filters, value: string) => {
    setFilters(prevFilters => {
      const newFilters = {
        ...prevFilters,
        [key]: value,
      };
      console.log(`Atualizando filtro ${key} para ${value}`);
      setPage(1); // Redefine a página para a primeira
      return newFilters;
    });
  }, [setPage]);

  useEffect(() => {
    console.log("Filtros atualizados:", filters);
  }, [filters]);

  return {
    filters,
    updateFilter
  };
};
