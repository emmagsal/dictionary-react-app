import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';


export default function Dictionary() {
    let [searchword, setSearchword] = useState("");
    let [results, setResults] = useState({});
function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
}

function searchAlert(event) {
    event.preventDefault();
    alert(`Searching for ${searchword}`);

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
axios.get(apiUrl).then(handleResponse);
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