import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState({name: ""});
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(result => {
      setCharacter(result.data.results);
    })
    .catch(error => {
      console.log("There's an error", error);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
