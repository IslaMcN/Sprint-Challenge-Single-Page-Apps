import React, {useState} from 'react';
import {Card} from 'semantic-ui-react';

export default function EpisodeCard(props) {
    
    return(
        <Card>
          <h1>{props.character.name}</h1>
          <h2>Episode: {props.character.episode}</h2>
          <h3>Date Aired: {props.character.air_date}</h3>
        </Card>
    
    )
}