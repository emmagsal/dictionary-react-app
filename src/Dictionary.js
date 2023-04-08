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
    setResults(response.data[0]);
}

function handleImageResponse(response) {
  setPhotos(response.data.photos);

}
function searchAlert(event) {
    event.preventDefault();
    

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
axios.get(apiUrl).then(handleResponse);

let imageApiKey = "t47d63b183094ea0a0d9f3acff7fbo8d";
let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchword}&key=${imageApiKey}`;

axios.get(imageApiUrl).then(handleImageResponse);
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