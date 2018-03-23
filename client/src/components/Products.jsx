import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Input, Divider } from 'semantic-ui-react';
import CardPlaceholder from './CardPlaceholder';

import ProductCard from './ProductCard';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onUserInput(e.target.value);
    e.preventDefault();
  }

  render() {
    const { products } = this.props;

    const filteredProducts = this.props.products.filter(
      product =>
        product.name
          .concat(product.description)
          .toLowerCase()
          .indexOf(this.props.filterText.toLowerCase()) !== -1
    );

    return (
      <Container fluid>
        <Input
          fluid
          icon="search"
          placeholder="Search products..."
          focus
          onChange={this.handleInputChange}
        />
        <Divider />
        {products.length !== 0 ? (
          <Card.Group>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                title={product.title}
                description={product.description}
                price={product.price}
                images={product.images}
                category={product.category}
                tags={product.tags}
                id={product.id}
                currency={this.props.currency}
              />
            ))}
          </Card.Group>
        ) : (
          <Card.Group>
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
          </Card.Group>
        )}
      </Container>
    );
  }
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.objectOf(PropTypes.string).isRequired,
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};

export default Home;
