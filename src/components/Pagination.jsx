import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded mr-2"
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        Previous
      </button>
      <span className="px-4 py-2">{`Page ${currentPage}`}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded ml-2"
        style={{ opacity: totalPages === 1 ? 0.5 : 1 }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
