import React from "react";
import { Paging } from "../styled/megaboxStyle";

const MegaPaging = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => index + 1);

  return (
    <Paging>
      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
          <button onClick={() => paginate(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
    </Paging>
  );
};

export default MegaPaging;
