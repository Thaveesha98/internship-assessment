import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <MuiPagination 
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      size="large"
      showFirstButton
      showLastButton
      siblingCount={1}
      boundaryCount={1}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 4,
        
      
      }}
    />
  );
};

export default Pagination;