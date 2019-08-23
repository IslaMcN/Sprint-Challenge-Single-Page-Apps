import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';




const EpisodeList = () => {
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
        <div>
            <h2>EpisodeList</h2>
        {/* {episode.map(episode => (
            <EpisodeCard

            episode={episode}
            name={episode.name}
            number={episode.id}
            airDate={episode.air_date}


            />
        ))} */}
    </div>
    )
    
}



export default EpisodeList; 