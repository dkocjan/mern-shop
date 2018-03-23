import React, { PureComponent } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

class Account extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      data: {
        address: 'test',
      },
    };
  }

  // todo fetch orders
  // todo fetch account data

  render() {
    return (
      <Container fluid>
        <Header as="h2" icon textAlign="center">
          <Icon name="settings" />
          Account Settings
          <Header.Subheader>
            Manage your account settings and set e-mail preferences.
            {this.state.orders} {this.state.data.address}
          </Header.Subheader>
        </Header>
        <Segment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>
      </Container>
    );
  }
}

export default Account;
