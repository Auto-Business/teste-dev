// components/LoadingState.tsx
import React from 'react';

export const LoadingState: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#272B33E6]">
      <div
        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-green-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
        aria-label="Carregando"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Carregando...
        </span>
      </div>
    </div>
  );
};