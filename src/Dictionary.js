import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';


export default function Dictionary() {
    let [searchword, setSearchword] = useState("");
    let [results, setResults] = useState("");
    let [photos, setPhotos] = useState("");

function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
}

function handlePexelsResponse(response) {
  setPhotos(response.data.photos);

}
function searchAlert(event) {
    event.preventDefault();
    

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
axios.get(apiUrl).then(handleResponse);

let pexelsApiKey = "UxNktkMBFYaKDrmjsgO6yM7Ue3A2ytQy3lMfMj5xC8pzvyLyF2zWeJNG";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchword}&per_page=1`;
let headers = { Authorization: `Bearer ${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}
function findSearchword(event) {
    setSearchword(event.target.value);
    
}
  return (
    <div className="Dictionary">
      <section>
    <form onSubmit={searchAlert}>
      <input type="search" placeholder="Search your word..." onChange={findSearchword} />
      <input type="submit" value="Search" />
    </form>
    </section>
    <Results results={results} />
    <Photos photos={photos} />
    </div>
  )
}