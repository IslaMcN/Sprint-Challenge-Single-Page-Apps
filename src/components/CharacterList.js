import React, { useEffect, useState } from "react";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [person, setPerson] = useState()
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const id = props.match.params.id;
        
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        setPerson(response.data);
    })
    .catch(error => {
        console.error('Server Error', error);
    });

  }, [props.match.params.id]);

  return (
    <section className="character-list grid-view">
      <h2>{person.map(person => (
      <CharacterCard key={person.id} character={person} />))} </h2>
    </section>
  );
}
