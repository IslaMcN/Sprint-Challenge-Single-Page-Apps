import React from "react";


export default function CharacterCard(props) {
  
  
  return(
    <div className="character-card">
      <h2>{props.name}</h2>
      <div className="status">
        Status: <em>{props.status}</em>
      </div>
      <div className="species">
        Species: <strong>{props.species}</strong>
      </div>
      <div className="type">
        Species: <strong>{props.type}</strong>
      </div>
      <div className="gender">
        Species: <strong>{props.gender}</strong>
      </div>
     
      
    </div>
  )
}
