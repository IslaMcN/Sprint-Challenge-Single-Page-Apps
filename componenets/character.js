import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EpisodeCard from './episode';


const Character = (props) => {
    const [person, setPerson] = useState()
    useEffect(() => {
        const id = props.match.params.id;
        
            axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(response => {
                setPerson(response.data);
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        
        
    },[props.match.params.id]);

    return(
        <div className="characters">
            {person.map(person => (
                <EpisodeCard key={person.id} character={person} />
            ))}
        </div>
    )
}

export default Character;




