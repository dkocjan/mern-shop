import React from 'react';
import { Button, Form, Icon, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LogIn = () => (
  <div>
    <Message
      attached
      header="Welcome to our site!"
      content="Fill out the form below to sign-up for a new account"
    />
    <Form className="attached fluid segment">
      <Form.Input
        label="E-mail"
        placeholder="Your e-mail address"
        type="text"
      />
      <Form.Input
        label="Password"
        placeholder="Your password"
        type="password"
      />
      <Button color="blue">Submit</Button>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help" />
      Don{"'"}t have an account?&nbsp;<Link to="/signup">Sign up here</Link>!
    </Message>
  </div>
);

export default LogIn;
