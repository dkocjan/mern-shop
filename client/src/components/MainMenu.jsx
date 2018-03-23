import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

class MainMenu extends Component {
  state = { activeItem: 'products' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing stackable>
        {/* Home */}
        <Menu.Item
          as={Link}
          to="/"
          name="products"
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
        />

        {/* Categories */}
        <Menu.Item
          as={Dropdown}
          item
          text="Categories"
          name="categories"
          active={activeItem === 'categories'}
        >
          <Dropdown.Menu>
            {this.props.categories.map(category => (
              <Link to={`/c/${category.name}`} key={category.id}>
                <Dropdown.Item name="categories" onClick={this.handleItemClick}>
                  {category.name}
                </Dropdown.Item>
              </Link>
            ))}
          </Dropdown.Menu>
        </Menu.Item>

        {/* Cart */}
        <Menu.Item
          as={Link}
          to="/cart"
          name="cart"
          content={
            this.props.cart.length === 0
              ? 'Cart'
              : `Cart (${this.props.cart.length})`
          }
          active={activeItem === 'cart'}
          onClick={this.handleItemClick}
        />

        {/* Admin */}
        {this.props.isAdmin ? (
          <Menu.Item
            as={Link}
            to="/admin"
            name="admin"
            active={activeItem === 'admin'}
            onClick={this.handleItemClick}
            header
          />
        ) : null}

        {/* Right menu */}
        <Menu.Menu position="right">
          {/* Account */}
          <Menu.Item
            as={Link}
            to="/account"
            name="account"
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
          />
          {/* Signup */}
          <Menu.Item as={Link} to="/signup" onClick={this.handleItemClick}>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

MainMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAdmin: PropTypes.bool.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainMenu;
