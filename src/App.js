import React from "react";
import TabNav from './components/TabNav';
import CharacterList from './components/CharacterList'
import Header from './components/Header';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/episode';
import AppRouter from './Route';

export default function App() {
  return (
  <main>
    <Header />
    
    <TabNav />
    
    <AppRouter />
  </main>
  );
}
