import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <header class="header item">Points of Interest</header>
        <div class="right menu">
          <Menu.Item
            name='dashboard'
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="pois"
            active={activeItem === 'pois'}
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
        </div>
      </Menu>
    )
  }
}