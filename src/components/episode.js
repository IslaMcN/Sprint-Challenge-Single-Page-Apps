import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import {Card} from 'semantic-ui-react';




const EpisodeList = (props) => {
    const [episode, setEpisode] = useState([])
    useEffect(() => {
       
            axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                setEpisode(response.data.results);
            })
            .catch(error => {
                console.error('Episode Error', error);
            });
        
   
    }, []);
    return(
        <section className="character-list grid-view">
      {episode.map(character => (
        <EpisodeCard key={character.id} character={character} />
      ))}
    </section>
    )
    
}



export default EpisodeList; 