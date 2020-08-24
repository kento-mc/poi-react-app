import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

const NavBar = ({ user }) => {

  const [activeItem, setActiveItem] = useState('dashboard')

  const menu = (user, activeItem) => {
    if (user) {
      return (
        <>
          <Link to='/dashboard'>
            <Menu.Item
              name='dashboard'
              active={activeItem === 'dashboard'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to='/pois'>
            <Menu.Item
              name="points of interest"
              active={activeItem === 'points of interest'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to='/settings'>
            <Menu.Item
              name='settings'
              active={activeItem === 'settings'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to='/logout'>
            <Menu.Item
              name='log out'
              active={activeItem === 'log out'}
              onClick={handleItemClick}
            />
          </Link>
        </>
      )
    }else {
      return (
        <>
          <Link to='/login'>
            <Menu.Item
              name='log in'
              active={activeItem === 'log in'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to='/signup'>
            <Menu.Item
              name="sign up"
              active={activeItem === 'sign up'}
              onClick={handleItemClick}
            />
          </Link>
        </>
      )
    }
  };

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

  return (
    <Menu inverted>
      <Link to='/dashboard'>
        <header className="header item">Points of Interest</header>
      </Link>
      <div className="right menu">
        {menu(user, activeItem)}
      </div>
    </Menu>
  )
  
}

export default NavBar;