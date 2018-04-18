import React, { PureComponent } from 'react';
import { Container, Header, Icon, Grid, Form, Input, Button } from 'semantic-ui-react';

class Account extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      data: {
        address: '',
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
        <Grid divided columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label htmlFor="e-mail">E-mail</label>
                  <Input type="email" action>
                    <input />
                    <Button animated="vertical" color="blue">
                      <Button.Content hidden>Edit</Button.Content>
                      <Button.Content visible>
                        <Icon name="edit" />
                      </Button.Content>
                    </Button>
                  </Input>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="password">Password</label>
                  <Input type="password" action>
                    <input />
                    <Button animated="vertical" color="blue">
                      <Button.Content hidden>Edit</Button.Content>
                      <Button.Content visible>
                        <Icon name="edit" />
                      </Button.Content>
                    </Button>
                  </Input>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="address">Address</label>
                  <Input type="text" action>
                    <input />
                    <Button animated="vertical" color="blue">
                      <Button.Content hidden>Edit</Button.Content>
                      <Button.Content visible>
                        <Icon name="edit" />
                      </Button.Content>
                    </Button>
                  </Input>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="phone">Phone</label>
                  <Input type="phone" action>
                    <input />
                    <Button animated="vertical" color="blue">
                      <Button.Content hidden>Edit</Button.Content>
                      <Button.Content visible>
                        <Icon name="edit" />
                      </Button.Content>
                    </Button>
                  </Input>
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>&nbsp;</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Account;
