import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react';

class ErrorModal extends PureComponent {
  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.handleClose}
        basic
        size="large"
        dimmer="blurring"
        as={Container}
      >
        <Header content="Something went wrong 🙁" />
        <Modal.Content>
          <h2>
            <Icon name="bug" />
            {this.props.error}
          </h2>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.props.handleClose} inverted>
            <Icon name="checkmark" /> Got it
          </Button>
          <Button
            color="blue"
            onClick={() => {
              window.location.reload();
            }}
            inverted
          >
            <Icon name="refresh" /> Refresh
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

ErrorModal.propTypes = {
  error: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ErrorModal;
