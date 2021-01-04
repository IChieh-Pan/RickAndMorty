import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import "./_Pagination.scss";

function Pagination() {
  const nextHandler = (event) => {
    event.preventDefault();
    if (page < info.pages) {
      setPage(page + 1);
    } else {
      setPage(page);
    }
  };

  const prevHandler = (event) => {
    event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  return (
    <div>
      <Button
        variant="dark"
        href="#"
        class="previous"
        size="sm"
        onClick={(event) => prevHandler(event)}
        disabled={page === 1}
      >
        &#8249; &nbsp; Previous Page
      </Button>
      <Button
        variant="dark"
        href="#"
        class="next"
        size="sm"
        onClick={(event) => nextHandler(event)}
        disabled={page === info.pages}
      >
        Next Page &nbsp; &#8250;
      </Button>
    </div>
  );
}

export default Pagination;
