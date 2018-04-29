import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, List, Form, Image, Button, Icon } from 'semantic-ui-react';

class Admin extends PureComponent {
  render() {
    // #########
    // ###
    // ### TODO!
    // ###
    // #########
    return (
      <div>
        {this.props.isAdmin ? (
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <List divided size="big">
                    <List.Item>
                      <List.Content>
                        <Grid columns={2}>
                          <Grid.Row stretched>
                            <Grid.Column width={12}>
                              <List.Header>Order 5.</List.Header>
                              <List size="tiny">
                                <List.Item>2 x Bed</List.Item>
                                <List.Header>1 910,90 zł</List.Header>
                              </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              Paid<Form.Checkbox checked disabled />
                              Shipped<Form.Checkbox />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <Grid columns={2}>
                          <Grid.Row stretched>
                            <Grid.Column width={12}>
                              <List.Header>Order 4.</List.Header>
                              <List size="tiny">
                                <List.Item>2 x Bed</List.Item>
                                <List.Header>1 910,90 zł</List.Header>
                              </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              Paid<Form.Checkbox />
                              Shipped<Form.Checkbox />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <Grid columns={2}>
                          <Grid.Row stretched>
                            <Grid.Column width={12}>
                              <List.Header>Order 3.</List.Header>
                              <List size="tiny">
                                <List.Item>2 x Bed</List.Item>
                                <List.Header>1 910,90 zł</List.Header>
                              </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              Paid<Form.Checkbox checked disabled />
                              Shipped<Form.Checkbox />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <Grid columns={2}>
                          <Grid.Row stretched>
                            <Grid.Column width={12}>
                              <List.Header>Order 2.</List.Header>
                              <List size="tiny">
                                <List.Item>2 x Bed</List.Item>
                                <List.Header>1 910,90 zł</List.Header>
                              </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              Paid<Form.Checkbox checked disabled />
                              Shipped<Form.Checkbox checked disabled />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <Grid columns={2}>
                          <Grid.Row stretched>
                            <Grid.Column width={12}>
                              <List.Header>Order 1.</List.Header>
                              <List size="tiny">
                                <List.Item>2 x Bed</List.Item>
                                <List.Header>1 910,90 zł</List.Header>
                              </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              Paid<Form.Checkbox checked disabled />
                              Shipped<Form.Checkbox checked disabled />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </List.Content>
                    </List.Item>
                  </List>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <List divided size="big" verticalAlign="middle">
                    <List.Item>
                      <Button fluid color="green">
                        Add product
                      </Button>
                    </List.Item>
                    {this.props.products.map(product => {
                      if (!this.props.products) {
                        window.location.href = '/';
                      }
                      return (
                        <List.Item key={product.id}>
                          <Image avatar src={`data:image/png;base64,${product.images[0]}`} />
                          <List.Content verticalAlign="middle">
                            {' '}
                            {product.title} ({product.price.toLocaleString(
                              this.props.currency.countryCode,
                              {
                                style: 'currency',
                                currency: this.props.currency.name,
                              }
                            )})
                          </List.Content>
                          <List.Content floated="right" verticalAlign="middle">
                            <Button compact animated="vertical" basic color="red">
                              <Button.Content hidden>Remove</Button.Content>
                              <Button.Content visible>
                                <Icon name="trash" />
                              </Button.Content>
                            </Button>
                            <Button compact animated="vertical" basic color="blue">
                              <Button.Content hidden>Edit</Button.Content>
                              <Button.Content visible>
                                <Icon name="edit" />
                              </Button.Content>
                            </Button>
                          </List.Content>
                        </List.Item>
                      );
                    })}
                  </List>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ) : (
          'No admin'
        )}
      </div>
    );
  }
}

Admin.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.shape({
    name: PropTypes.string,
    countryCode: PropTypes.string,
  }).isRequired,
};

export default Admin;
