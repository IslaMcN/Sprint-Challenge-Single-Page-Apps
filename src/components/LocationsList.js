import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Route from 'react-router-dom';

const LocationList = (props) => {
    const [location, setLocation] = useState()
    useEffect(() => {
        const id = props.match.params.id;
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
            setLocation(response.data);
        })
        .catch(error => {
            console.error('Location error', error);
        });
    
    
    },[props.match.params.id]);
        
        return(
            
            <div className="locations">
                <CharacterCard episode={episode} />

            </div>
            
        )
}



export default LocationList;
