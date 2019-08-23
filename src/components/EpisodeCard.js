import React, {useState} from 'react';

export default function EpisodeCard(props) {
    const{name, air_date, episode, characters} = useState([])
    return(
        <div className="episode-card">
      <h2>{name}</h2>
      <div className="date">
        Aired: <em>{air_date}</em>
      </div>
      <div className="episode">
        Episode: <strong>{episode}</strong>
      </div>
    
      <h3>Characters</h3>
      {characters.map(character => (
        <div key={id} className="character"> {character} </div>
      ))}
    </div>
    )
}