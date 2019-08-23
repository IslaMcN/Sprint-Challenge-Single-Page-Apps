import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
import Route from 'react-router-dom';

const LocationList = (props) => {
    const [location, setLocation] = useState()
    useEffect(() => {
        
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
            setLocation(response.data);
        })
        .catch(error => {
            console.error('Location error', error);
        });
    
    
    },[]);
        
        return(
            
            <div className="locations">
                <h2>Locations</h2>
                <LocationCard location={location} />

            </div>
            
        )
}



export default LocationList;
