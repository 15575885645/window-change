import React from "react";
import "./search.scss";

export default function Search() {
  return (
    <div className="container">
      <input type="text" placeholder="Search..."></input>
      <div className="search"></div>
    </div>
  );
}
