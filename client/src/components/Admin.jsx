import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Admin extends PureComponent {
  render() {
    return <div>{this.props.isAdmin ? 'Admin' : 'No admin'}</div>;
  }
}

Admin.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default Admin;
