import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Input, Divider, Dimmer } from 'semantic-ui-react';
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
    const { products, filterText } = this.props;

    const filteredProducts = products.filter(
      product =>
        product.title
          .concat(product.description)
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) !== -1
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
          <Dimmer.Dimmable as={Card.Group} style={{ height: 1000 }} blurring active="true">
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
          </Dimmer.Dimmable>
        )}
      </Container>
    );
  }
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.shape({
    name: PropTypes.string,
    countryCode: PropTypes.string,
  }).isRequired,
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};

export default Home;
