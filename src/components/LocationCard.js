import React from "react";
import {Card} from 'semantic-ui-react';

export default function LocationCard(props) {
  return <Card>
    <div className="location-card">
            <h2>{props.character.name}</h2>
            <div className="type">
                Type: <em>{props.character.type}</em>
            </div>
            <div className="dimension">
                Dimension: <strong>{props.character.dimension}</strong>
            </div>
            

            
        </div>
  </Card>
  ;
}
