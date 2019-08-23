import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/episode';

export default function AppRouter() {
  return <div>
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path='/episode' component={EpisodeList} />
      <Route exact path='/' component={WelcomePage} />
    </Switch>
  </div>

}