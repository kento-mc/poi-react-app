import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { 
    activeItem: 'home', 
    user: this.props.user
  }

  menu = (user, activeItem) => {
    if (user) {
      return (
        <>
          <Menu.Item
            name='dashboard'
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="points of interest"
            active={activeItem === 'points of interest'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='settings'
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='log out'
            active={activeItem === 'log out'}
            onClick={this.handleItemClick}
          />
        </>
      )
    }else {
      return (
        <>
          <Menu.Item
            name='log in'
            active={activeItem === 'log in'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="sign up"
            active={activeItem === 'sign up'}
            onClick={this.handleItemClick}
          />
        </>
      )
    }
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { user, activeItem } = this.state

    return (
      <Menu inverted>
        <header className="header item">Points of Interest</header>
        <div class="right menu">
          {this.menu(user, activeItem)}
        </div>
      </Menu>
    )
  }
}