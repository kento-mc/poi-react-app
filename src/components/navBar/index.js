import React, { useState, useContext } from 'react'
import { Link, NavLink, Redirect } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../../contexts/authContext';
import { PoiContext } from '../../contexts/poiContext';
import { withRouter } from "react-router-dom";

const NavBar = ({ user }) => {

  const authContext = useContext(AuthContext);
  const poiContext = useContext(PoiContext);

  const [activeItem, setActiveItem] = useState(null);
  const [logout, setLogout] = useState(false);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const handleLogOut = (e) => {
    poiContext.clearData();
    authContext.signout();
    setLogout(true);
  };

  if (logout) {
    return <Redirect to='/login' />;
  }
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
              active={activeItem === 'dashboard' || activeItem === ''}
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
              name='log out'
              active={activeItem === 'log out'}
              onClick={handleLogOut}
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
}

export default withRouter(NavBar);