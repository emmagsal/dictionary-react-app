import React from "react";
import './Dictionary.css';

export default function Dictionary() {
  return (
    <form>
      <input type="search" placeholder="Search your word..." />
      
      <input type="submit" value="Search" />
    </form>
  )
}