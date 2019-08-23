import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [person, setPerson] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
        
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        setPerson(response.data.results);
    })
    .catch(error => {
        console.error('Server Error', error);
    });

  }, []);

  return(
    <section className="character-list grid-view">
      {person.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}
