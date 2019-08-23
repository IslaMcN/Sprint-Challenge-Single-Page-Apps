import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const EpisodeList = () => {
    const [episode, setEpisode] = useState([])
    useEffect(() => {
        const getEpisodes = () => {
            axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                setEpisode(response.data);
            })
            .catch(error => {
                console.error('Episode Error', error);
            });
        }
        getEpisodes();
    }, []);
    
}


const EpisodeCard = props => {
    const{name, type, dimension, residents, url, created} = props.episode;
    return(
        <div className="episode-card">
            <h2>{name}</h2>
            <div className="type">
                Type: <em>{type}</em>
            </div>
            <div className="dimension">
                Dimension: <strong>{dimension}</strong>
            </div>
            <h3>Residents</h3>
            {residents.map(resident => (
                <div key={id} className="residents">
                    {residents}
                </div>

            ))}
        </div>
    );
};

export default EpisodeCard; 