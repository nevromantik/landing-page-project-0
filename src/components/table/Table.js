import React from "react";
import { useState } from "react";
import "./Table.css";
import TableContent from "./Table-content";
const Table = (props) => {
  const [btnValue, setBtnValue] = useState("1");
  const [active, setActive] = useState("1");
  const getContent = (e, btnId) => {
    e.preventDefault();
    let btnAttr = e.target.getAttribute("val");

    setBtnValue(btnAttr);
    setActive(btnAttr);
  };

  return (
    <div className="table-wrap">
      <div className="table-container">
        <h1 className="table-h1">Our Design Creativity</h1>
        <div className="table-btn-wrap">
          <button
            val="1"
            className={`btn-table btn1 ${
              active == "1" ? "btnBackground" : undefined
            }`}
            onClick={getContent}
          >
            Overview
          </button>
          <button
            val="2"
            className={`btn-table btn2 ${
              active == "2" ? "btnBackground" : undefined
            }`}
            onClick={getContent}
          >
            Founder
          </button>
          <button
            val="3"
            className={`btn-table btn3 ${
              active == "3" ? "btnBackground" : undefined
            }`}
            onClick={getContent}
          >
            Mission
          </button>
        </div>
        <div className="table-content">
          <TableContent contentVal={btnValue}></TableContent>
        </div>
      </div>
    </div>
  );
};

export default Table;
