import React from "react";
import TabNav from './components/TabNav';
import CharacterList from './components/CharacterList'
import Header from './components/Header';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/episode';

export default function App() {
  return (
  <main>
    <Header />
    
    <TabNav />
    <CharacterList />
     <LocationsList />
    <EpisodeList />
  </main>
  );
}
