import React, { useState } from 'react';
import { ArrowPre, ArrowNext } from './PaginationArrow';

function PaginationSet({ totalPages, currentPage, onPageChange }) {
  const handlePrevious = () => {
    const newPage = currentPage === 1 ? totalPages : currentPage - 1;
    onPageChange(newPage);
  };

  const handleNext = () => {
    const newPage = currentPage === totalPages ? 1 : currentPage + 1;
    onPageChange(newPage);
  };

  return (

    <div className="pagination d-flex align-items-center gap-3">
      {/* 이전 페이지 버튼 */}
      <ArrowPre onClick={handlePrevious} />

      {/* 현재 페이지 표시 */}
      <span>{currentPage} / {totalPages}</span>

      {/* 다음 버튼 */}
      <ArrowNext onClick={handleNext} />
    </div>
  );
}

export default PaginationSet;