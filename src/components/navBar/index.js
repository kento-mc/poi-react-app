import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
import { useEffect } from 'react';

const NavBar = ({ user }) => {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu inverted>
      <Link to='/dashboard'>
        <header className="header item">Points of Interest</header>
      </Link>
      <div className="right menu">
        {user ?
          <>
            <Menu.Item
              as={NavLink}
              to={'/dashboard'}
              name='dashboard'
              active={activeItem === 'dashboard'}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to={'/pois'}
              name="points of interest"
              active={activeItem === 'points of interest'}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to={'/settings'}
              name='settings'
              active={activeItem === 'settings'}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to={'/logout'}
              name='log out'
              active={activeItem === 'log out'}
              onClick={handleItemClick}
            />
          </>
          :
          <>
            <Menu.Item
              as={NavLink}
              to={'/login'}
              name='log in'
              active={activeItem === 'log in'}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to={'/signup'}
              name="sign up"
              active={activeItem === 'sign up'}
              onClick={handleItemClick}
            />
          </>
        }
      </div>
    </Menu>
  )

  // const [activeItem, setActiveItem] = useState({ activeItem: 'dashboard' })

  // const menu = (user, activeItem) => {
  //   if (user) {
  //     return (
  //       <>
  //         <Menu.Item
  //           as={Link}
  //           to={'/dashboard'}
  //           name='dashboard'
  //           active={activeItem === 'dashboard'}
  //           onClick={handleItemClick}
  //         />
  //         <Menu.Item
  //           as={Link}
  //           to={'/pois'}
  //           name="points of interest"
  //           active={activeItem === 'points of interest'}
  //           onClick={handleItemClick}
  //         />
  //         <Menu.Item
  //           as={Link}
  //           to={'/settings'}
  //           name='settings'
  //           active={activeItem === 'settings'}
  //           onClick={handleItemClick}
  //         />
  //         <Menu.Item
  //           as={Link}
  //           to={'/logout'}
  //           name='log out'
  //           active={activeItem === 'log out'}
  //           onClick={handleItemClick}
  //         />
  //       </>
  //     )
  //   }else {
  //     return (
  //       <>
  //         <Menu.Item
  //           as={Link}
  //           to={'/login'}
  //           name='log in'
  //           active={activeItem === 'log in'}
  //           onClick={handleItemClick}
  //         />
  //         <Menu.Item
  //           as={Link}
  //           to={'/signup'}
  //           name="sign up"
  //           active={activeItem === 'sign up'}
  //           onClick={handleItemClick}
  //         />
  //       </>
  //     )
  //   }
  // };

  // const handleItemClick = (e, { name }) => {
  //   console.log(e);
  //   console.log(name);
  //   setActiveItem({ activeItem: name })
  // }

  // return (
  //   <Menu inverted>
  //     <Link to='/dashboard'>
  //       <header className="header item">Points of Interest</header>
  //     </Link>
  //     <div className="right menu">
  //       {menu(user, activeItem)}
  //     </div>
  //   </Menu>
  // )
  
}

export default NavBar;