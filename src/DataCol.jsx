import React from "react";

const DataCol = ({ children }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <ul className="list-group list-group-flush mx-4">{children}</ul>
    </div>
  );
};

export default DataCol;
