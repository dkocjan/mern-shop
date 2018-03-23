import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Placeholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { Header, Segment, Dimmer, Loader, Icon } from 'semantic-ui-react';

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
        }, 1500);
      })
      .catch(err => ErrorHandler(`Error fetching data: ${err}`));
  }

  render() {
    const loading = !this.state.product;
    return (
      <Dimmer.Dimmable as={Segment} raised>
        <Header as="h2" textAlign="center">
          {loading ? (
            <Placeholder type="text" showLoadingAnimation />
          ) : (
            this.state.product.title
          )}
        </Header>

        <Dimmer active={loading} inverted>
          <Loader>Loading...</Loader>
        </Dimmer>

        <Segment vertical>
          {loading ? (
            <Placeholder type="text" rows={3} showLoadingAnimation />
          ) : (
            this.state.product.description
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
};

export default Product;
