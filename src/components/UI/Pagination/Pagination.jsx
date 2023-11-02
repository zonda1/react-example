import React from "react";
import { getPagesArray } from "../../../utils/utils";
import { usePagesArray } from '../../hooks/usePagesArray';

const Pagination = ({ page, onClick, total }) => {
  const pagesArray = usePagesArray(total);
  return (
    <div className="pagination">
      {pagesArray.map((p) => (
        <span
        key={p}
          className={page === p ? "page page--current" : "page"}
          onClick={() => onClick(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
