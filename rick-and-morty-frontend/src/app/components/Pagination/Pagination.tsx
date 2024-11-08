import React from 'react';
import styles from './Pagination.module.css'; // Import do CSS Module

interface PaginationProps {
  page: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onNextPage, onPreviousPage }) => (
  <div className={styles.paginationContainer}>
    <button
      onClick={onPreviousPage}
      disabled={page === 1}
      className={styles.button}
      aria-label="Página anterior"
    >
      Anterior
    </button>
    <span className={styles.pageInfo} aria-live="polite">Página {page} de {totalPages}</span>
    <button
      onClick={onNextPage}
      disabled={page === totalPages}
      className={styles.button}
      aria-label="Próxima página"
    >
      Próxima
    </button>
  </div>
);

export default Pagination;
