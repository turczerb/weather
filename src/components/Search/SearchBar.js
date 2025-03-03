import React, { useState, useEffect } from "react";

const SearchBar = ({ inputText, onInputChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // megakadalyozza az urlap bekuldeset, s ujratoltest.
    onSubmit(); //Meghívja a szülő komponensben lévő keresés függvényt (pl. a keresés indítása)
  };

  const handleChange = (e) => {
    onInputChange(e.target.value); //Az e.target.value az input mező új értéke,amit szuloknek adunk at
    console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="city name"
          value={inputText}
          onChange={handleChange}
        ></input>
        <button type="submit">klikk</button>
      </form>
    </div>
  );
};

export default SearchBar;
