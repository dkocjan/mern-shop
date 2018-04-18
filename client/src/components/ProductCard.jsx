import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ProductCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
      ],
    };
  }

  render() {
    const col = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
    return (
      <Card color={col} centered as={Link} to={`/p/${this.props.name}/${this.props.id}`}>
        <Image src={`data:image/png;base64,${this.props.images[0]}`} />
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.tags.map(tag => <span key={tag}>#{tag}</span>)}</Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Icon name="tag" />
          {this.props.price.toLocaleString(this.props.currency.countryCode, {
            style: 'currency',
            currency: this.props.currency.name,
          })}
        </Card.Content>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  currency: PropTypes.shape({
    name: PropTypes.string,
    countryCode: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
