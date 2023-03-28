import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary() {
    let [searchword, setSearchword] = useState("");

function searchAlert(event) {
    event.preventDefault();
    alert(`Searching for ${searchword}`);
}
function findSearchword(event) {
    setSearchword(event.target.value);
    
}
  return (
    <form onSubmit={searchAlert}>
      <input type="search" placeholder="Search your word..." onChange={findSearchword} />
      <input type="submit" value="Search" />
    </form>
  )
}