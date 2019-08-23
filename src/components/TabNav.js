import React from "react";
import { Tab,} from "semantic-ui-react";
import {  NavLink } from "react-router-dom";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/




const TabNav=() => {
    return(
        <div>
            <NavLink to="/Home">
                Home
            </NavLink>
            <NavLink to="/CharacterList">
                Characters
            </NavLink>
            <NavLink to="/LocationsList">
                Locations
            </NavLink>
            <NavLink to="/EpisodeList">
                Episodes
            </NavLink>
        </div>
    )
}


export default TabNav;