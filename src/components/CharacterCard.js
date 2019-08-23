import React, { useState } from "react";
import { get } from "http";

export default function CharacterCard(props) {
  const{name, status, species, type, gender, origin} = useState([])
  
  return(
    <div className="character-card">
      <h2>{name}</h2>
      <div className="status">
        Status: <em>{status}</em>
      </div>
      <div className="species">
        Species: <strong>{species}</strong>
      </div>
      <div className="type">
        Species: <strong>{type}</strong>
      </div>
      <div className="gender">
        Species: <strong>{gender}</strong>
      </div>
      <h3>Origin</h3>
      {origin.map(origins => (
        <div key={id} className="origin"> {origin} </div>
      ))}
    </div>
  )
}
