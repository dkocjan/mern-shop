import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Image, List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Cart extends PureComponent {
  handleClickRemove = e => {
    this.props.handleRemoveFromCart(e.target.getAttribute('data-id'));
  };

  render() {
    let cartTotalPrice = 0;
    let productTotalPrice = 0;
    return (
      <div>
        {this.props.cart.length !== 0 ? (
          <div>
            <List celled verticalAlign="middle" size="massive">
              {this.props.cart.map(cartElement => {
                const product = this.props.products.find(prod => prod.id === cartElement.id);

                if (!product) {
                  window.location.href = '/';
                }

                cartTotalPrice += product.price * cartElement.amount;
                productTotalPrice = product.price * cartElement.amount;
                return (
                  <List.Item key={product.id}>
                    <Image avatar src={`data:image/png;base64,${product.images[0]}`} />
                    <List.Content verticalAlign="middle"> {product.title}</List.Content>
                    <List.Content floated="right" verticalAlign="middle">
                      <Button
                        floated="right"
                        size="big"
                        basic
                        color="red"
                        data-id={product.id}
                        onClick={e => this.handleClickRemove(e)}
                      >
                        <Icon name="trash" />
                        Remove
                      </Button>
                      <Button floated="right" color="green" size="big">
                        ={' '}
                        {productTotalPrice.toLocaleString(this.props.currency.countryCode, {
                          style: 'currency',
                          currency: this.props.currency.name,
                        })}
                      </Button>
                      <Button size="big" tag="true" floated="right" color="blue" basic>
                        {cartElement.amount} x{' '}
                        {product.price.toLocaleString(this.props.currency.countryCode, {
                          style: 'currency',
                          currency: this.props.currency.name,
                        })}
                      </Button>
                    </List.Content>
                  </List.Item>
                );
              })}
            </List>
            <Button animated="fade" color="green" size="large" as={Link} to="/checkout">
              <Button.Content visible>
                Checkout ({cartTotalPrice.toLocaleString(this.props.currency.countryCode, {
                  style: 'currency',
                  currency: this.props.currency.name,
                })})
              </Button.Content>
              <Button.Content hidden>
                <Icon name="cart" />
              </Button.Content>
            </Button>
          </div>
        ) : (
          <h3 align="center">Your cart is empty 🙁</h3>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.shape({
    name: PropTypes.string,
    countryCode: PropTypes.string,
  }).isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
