import React from "react";
import {Card, Image} from 'semantic-ui-react';


export default function CharacterCard(props) {
  
  
  return(
    <Card className="character-card">
      <Image src={props.character.image} />
      <h2>{props.name}</h2>
      <div className="status">
        Status: <em>{props.character.status}</em>
      </div>
      <div className="species">
        Species: <strong>{props.character.species}</strong>
      </div>
      <div className="type">
        Type: <strong>{props.character.type}</strong>
      </div>
      <div className="gender">
        Gender: <strong>{props.character.gender}</strong>
      </div>
     
      
    </Card>
  )
}
