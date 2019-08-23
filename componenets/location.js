import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EpisodeCard from './episode';

const Location = (props) => {
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
                <EpisodeCard episode={episode} />

            </div>
        )
}

export default Location;