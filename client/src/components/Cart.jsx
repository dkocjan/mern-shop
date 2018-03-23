import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Cart extends PureComponent {
  render() {
    return (
      <div>
        {this.props.cart.map(product => (
          <div key={product.id}>{product.id}</div>
        ))}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;
