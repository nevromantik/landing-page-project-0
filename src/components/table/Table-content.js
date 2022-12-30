import React, { useState, useEffect } from "react";
import "./Table-content.css";

let content;

const TableContent = (props) => {
  if (props.contentVal === "1") {
    content = (
      <div className="content-wrap">
        <h5 className="h5-c1 pos-c">
          Brave is an innovative web solution, which combines captivating design
          and <br />
          flawless functionality in a multipurpose HTML template.
        </h5>
        <p className="p1-c1 pos-c">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text. Duis <br /> aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="p-c1 pos-c">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text. Duis aute <br /> irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>{" "}
      </div>
    );
  } else if (props.contentVal === "2") {
    content = (
      <div className="content-wrap">
        <p className="p-c2 pos-c">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="p-c2 pos-c">
          {" "}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    );
  } else if (props.contentVal === "3") {
    content = (
      <div className="content-wrap">
        <h1 className="p1-c1 pos-c">Be The First To Review This Product!</h1>
        <p className="pos-c">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
      </div>
    );
  }

  return <div className="tab">{content}</div>;
};

export default TableContent;
