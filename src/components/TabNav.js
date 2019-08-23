import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/


const Nav = props => (
    <NavLink
    exact
    {...props}
    activeClassName="active"
    />
);

const tab = (name, text) => <div><Icon name={name}/>{text}</div>
const welcome = tab("home", "Welcome Page")
const character = tab("people", "Characters")
const episode = tab("episode", "Episodes")
const location = tab("location", "Locations")

const items = [
    {menuItem: <Menu.Item key='home' as={Nav} to={'/'} content={welcome} />},
    {menuItem: <Menu.Item key='people' as={Nav} to={'/characters'} content={character} />},
    {menuItem: <Menu.Item key='episode' as={Nav} to={'/episode'} content={episode} />},
    {menuItem: <Menu.Item key='location' as={Nav} to={'/locations'} content={location} />},
]

const TabNav=() => <Tab items={items} renderActiveOnly={false}/>


export default TabNav;