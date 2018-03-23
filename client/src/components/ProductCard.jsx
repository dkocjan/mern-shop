import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';

class ProductCard extends PureComponent {
  render() {
    return (
      <Card centered>
        <Image src={`data:image/png;base64,${this.props.images[0]}`} />
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.category}</Card.Meta>
          <Card.Description>
            {this.props.description} {this.props.tags}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="dollar" />
            {this.props.price}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductCard;
