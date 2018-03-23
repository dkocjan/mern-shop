import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Header, Divider } from 'semantic-ui-react';
import Product from './ProductCard';

class Category extends PureComponent {
  render() {
    const { products } = this.props;

    // Category name from route param
    const { name } = this.props.match.params;

    // Filter products by category
    const filteredProducts = products.filter(
      product => product.category === name
    );

    const { length } = filteredProducts;
    return (
      <Container fluid>
        <Header as="h3" textAlign="center">
          {length !== 0 ? (
            <span>
              We have {length} product{length === 1 ? '' : 's'} in {name}!
            </span>
          ) : (
            <span>There are no products in {name} 🙁</span>
          )}
        </Header>
        {length !== 0 ? <Divider /> : ''}

        <Card.Group>
          {filteredProducts.map(product => (
            <Product
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
      </Container>
    );
  }
}

Category.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  currency: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Category;
