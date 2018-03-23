import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

class MainMenu extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="small">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Dropdown item text="Categories">
            <Dropdown.Menu>
              {this.props.categories.map(category => (
                <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

MainMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainMenu;
