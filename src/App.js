import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {BrowserRouter as Router} from 'react-router-dom';


export default function App() {
  return (
    <Router>
    <main>
      <Header />
      <TabNav />
    </main>
    </Router>
  );
}
