import React, {useState, useEffect} from 'react';
import axios from 'axios';




const EpisodeList = (props) => {
    const [episode, setEpisode] = useState([])
    useEffect(() => {
        const id= props.match.params.id;
            axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                setEpisode(response.data);
            })
            .catch(error => {
                console.error('Episode Error', error);
            });
        
   
    }, [props.match.params.id]);
    return(
        <section className="episode-list">
            <h2>{episode.map(episodes => (
                <EpisodeCard key={episodes.id} episode={episodes} />
            ))}
            </h2>
        </section>
    )
    
}



export default EpisodeList; 