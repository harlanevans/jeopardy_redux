import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = () => (

  <Menu inverted color='red'
  style={{fontFamily: "'Cinzel', serif"}}>
    <Menu.Item>
      <NavLink exact to="/">
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink exact to="/about">
        About
      </NavLink>
    </Menu.Item>
    <Menu.Item position='right'>
      <NavLink exact to="/categories">
        All Categories
      </NavLink>
    </Menu.Item>
  </Menu>
);


export default NavBar;