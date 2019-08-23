import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    <Tab>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/CharacterList" component={CharacterList} />
        <Route path="/LocationList" component={LocationList} />
        <Route path="/episode" component={EpisodeList} />
    </Tab>

};

