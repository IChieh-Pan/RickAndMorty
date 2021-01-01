import React from "react";
import "../_Pagination.scss";

function Pagination() {
  return (
    <div>
      <div className="arrowContainer" onClick={() => setPage(page + 1)}>
        <a href="#" class="previous">
          &#8249; &nbsp; Previous
        </a>
        <a href="#" class="next">
          Next &nbsp; &#8250;
        </a>
      </div>
    </div>
  );
}

export default Pagination;
