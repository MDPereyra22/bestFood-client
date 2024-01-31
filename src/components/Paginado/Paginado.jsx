import React from "react";
import styles from "./Paginado.module.css";

const Paginado = ({ currentPage, totalPages, onPageChange }) => {
  const goToPreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.paginadoContainer}>
      <button className={styles.enterButton} onClick={goToPreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`${styles.paginaButton} ${currentPage === index + 1 ? styles.active : ""}`}
        >
          {index + 1}
        </button>
      ))}
      <button className={styles.enterButton} onClick={goToNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Paginado;

