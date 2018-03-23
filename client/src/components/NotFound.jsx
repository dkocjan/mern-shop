import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotFound extends PureComponent {
  render() {
    return <div>{this.props.textContent}</div>;
  }
}

NotFound.propTypes = {
  textContent: PropTypes.string,
};

NotFound.defaultProps = {
  textContent: 'Page not found!',
};

export default NotFound;
