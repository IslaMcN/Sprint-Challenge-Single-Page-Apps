import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/episode';

export default function AppRouter() {
  return <div>
    <Switch>
    <Route exact path="/Home" render={props => <WelcomePage {...props} />} />
      <Route exact path="/CharacterList" render={props => <CharacterList {...props} />} />
      <Route exact path="/LocationsList" render={props => <LocationsList {...props} />} />
       <Route exact path="/EpisodeList" render={props => <EpisodeList {...props} />} />
    </Switch>
  </div>

}