import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Placeholder from 'react-placeholder';

import 'react-placeholder/lib/reactPlaceholder.css';
import {
  Header,
  Segment,
  Dimmer,
  Loader,
  // Icon,
  Image,
  // Container,
  Grid,
  Label,
  Button,
  Icon,
} from 'semantic-ui-react';

const ErrorHandler = console.error; // eslint-disable-line

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentWillMount() {
    const { API_URL } = this.props;
    const { id } = this.props.match.params;
    // Fetch product
    axios
      .get(`${API_URL}/products/${id}`)
      .then(res => {
        const product = res.data;
        setInterval(() => {
          this.setState({ product });
        }, 500);
      })
      .catch(err => ErrorHandler(`Error fetching data - ${err}`));
  }

  render() {
    const loading = !this.state.product;

    return (
      <Dimmer.Dimmable as={Segment} raised>
        {loading ? (
          <Grid centered>
            <Placeholder type="rect" style={{ width: 420, height: 420 }} ready={false}>
              {' '}
            </Placeholder>
          </Grid>
        ) : (
          <Image src={`data:image/png;base64,${this.state.product.images[0]}`} centered />
        )}

        <Header as="h1" textAlign="center">
          {loading ? (
            <Segment vertical textAlign="center">
              <Placeholder type="text" showLoadingAnimation rows={3} ready={false}>
                {' '}
              </Placeholder>
            </Segment>
          ) : (
            <Segment vertical textAlign="center">
              <Header as="h1">{this.state.product.title}</Header>
              <Label.Group>
                {this.state.product.tags.map(tag => (
                  <Label key={tag} tag>
                    #{tag}
                  </Label>
                ))}
              </Label.Group>
            </Segment>
          )}
        </Header>

        <Dimmer active={loading} inverted>
          <Loader size="big">Loading...</Loader>
        </Dimmer>

        <Segment vertical textAlign="center">
          {loading ? (
            <Placeholder type="text" rows={5} showLoadingAnimation ready={false}>
              {' '}
            </Placeholder>
          ) : (
            this.state.product.description
          )}
        </Segment>
        <Segment vertical textAlign="center">
          {loading ? (
            <Placeholder type="text" rows={2} showLoadingAnimation ready={false}>
              {' '}
            </Placeholder>
          ) : (
            <Button as="div" labelPosition="right" size="big">
              <Button color="green" size="big">
                <Icon name="shop" />
                Add to cart
              </Button>
              <Label as="a" basic color="blue" pointing="left">
                {this.state.product.price.toLocaleString(this.props.currency.countryCode, {
                  style: 'currency',
                  currency: this.props.currency.name,
                })}
              </Label>
            </Button>
          )}
        </Segment>
      </Dimmer.Dimmable>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  API_URL: PropTypes.string.isRequired,
  currency: PropTypes.shape({
    name: PropTypes.string,
    countryCode: PropTypes.string,
  }).isRequired,
};

export default Product;
