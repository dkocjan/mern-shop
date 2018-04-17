import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Image, List, Icon, Form } from 'semantic-ui-react';

class Checkout extends PureComponent {
  render() {
    let cartTotalPrice = 0;
    let productTotalPrice = 0;
    return (
      <div>
        <div>
          <List celled verticalAlign="middle">
            {this.props.cart.map(cartElement => {
              const product = this.props.products.find(prod => prod.id === cartElement.id);

              if (!product || !this.props.cart) {
                window.location.href = '/';
              }

              cartTotalPrice += product.price * cartElement.amount;
              productTotalPrice = product.price * cartElement.amount;
              return (
                <List.Item key={product.id}>
                  <Image avatar src={`data:image/png;base64,${product.images[0]}`} />
                  <List.Content verticalAlign="middle"> {product.title}</List.Content>
                  <List.Content floated="right" verticalAlign="middle">
                    <Button floated="right" color="green">
                      ={' '}
                      {productTotalPrice.toLocaleString(this.props.currency.countryCode, {
                        style: 'currency',
                        currency: this.props.currency.name,
                      })}
                    </Button>
                    <Button tag="true" floated="right" color="blue" basic>
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
          <Form>
            <Form.Group unstackable widths={2}>
              <Form.Input label="First name" placeholder="First name" />
              <Form.Input label="Last name" placeholder="Last name" />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label="Address" placeholder="Address" />
              <Form.Input label="Phone" placeholder="Phone" />
            </Form.Group>
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Button animated="fade" color="green" type="submit" fluid>
              <Button.Content visible>
                Pay ({cartTotalPrice.toLocaleString(this.props.currency.countryCode, {
                  style: 'currency',
                  currency: this.props.currency.name,
                })})
              </Button.Content>
              <Button.Content hidden>
                <Icon name="payment" />
              </Button.Content>
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.shape({
    name: PropTypes.string,
    countryCode: PropTypes.string,
  }).isRequired,
};

export default Checkout;
