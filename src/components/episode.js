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
        <Card>
            <h4>EpisodeList</h4>
            {/* {episode.map(episode => (
                <EpisodeCard

                episode={episode}
                name={episode.name}
                number={episode.id}
                airDate={episode.air_date}
                
                
                />
            ))} */}
        </Card>
    )
    
}



export default EpisodeList; 