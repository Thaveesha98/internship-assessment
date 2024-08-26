import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    let pages = [];
    const maxVisiblePages = 3;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    // Determine start and end pages
    let startPage = Math.max(2, currentPage - halfVisible);
    let endPage = Math.min(totalPages - 1, currentPage + halfVisible);

    if (currentPage - halfVisible <= 1) {
      endPage = Math.min(
        totalPages - 1,
        endPage + (halfVisible - (currentPage - 2))
      );
    }

    if (currentPage + halfVisible >= totalPages) {
      startPage = Math.max(
        2,
        startPage - (halfVisible - (totalPages - currentPage - 1))
      );
    }

    // Add first page
    pages.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`px-2 py-1 mx-1 sm:px-3 sm:py-2 sm:mx-2 lg:px-4 lg:py-2 lg:mx-3 ${
          currentPage === 1 ? "font-bold" : ""
        }`}
      >
        1
      </button>
    );

    // Add dots if needed
    if (startPage > 2) {
      pages.push(
        <span
          key="start-dots"
          className="px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2"
        >
          ...
        </span>
      );
    }

    // Add the visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-2 py-1 mx-1 sm:px-3 sm:py-2 sm:mx-2 lg:px-4 lg:py-2 lg:mx-3 ${
            currentPage === i ? "font-bold" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    // Add dots if needed
    if (endPage < totalPages - 1) {
      pages.push(
        <span
          key="end-dots"
          className="px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2"
        >
          ...
        </span>
      );
    }

    // Add last page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-2 py-1 mx-1 sm:px-3 sm:py-2 sm:mx-2 lg:px-4 lg:py-2 lg:mx-3 ${
            currentPage === totalPages ? "font-bold" : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-4  mx-auto">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 sm:px-4 sm:py-2 border rounded mr-1 sm:mr-2 lg:mr-3"
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        Previous
      </button>
      <div className="text-lg max-sm:text-xs">{renderPageNumbers()}</div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 sm:px-4 sm:py-2 border rounded ml-1 sm:ml-2 lg:ml-3"
        style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
