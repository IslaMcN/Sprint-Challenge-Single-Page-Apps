import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';


export default function LocationList(props) {
    // TODO: Add useState to track data from useEffect
    const [location, setLocation] = useState([])
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      
          
      axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
          setLocation(response.data.results);
      })
      .catch(error => {
          console.error('Server Error', error);
      });
  
    }, []);
  
    return(
      <section className="location-list grid-view">
        {location.map(character => (
          <LocationCard key={character.id} character={character} />
        ))}
      </section>
    );
  }
  