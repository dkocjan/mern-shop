import React from 'react';
import { Button, Form, Icon, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignUp = () => (
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
      <Form.Input label="Password" type="password" />
      <Form.Checkbox inline label="I agree to the terms and conditions" />
      <Button color="blue">Submit</Button>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help" />
      Already signed up?&nbsp;<Link to="/login">Login here</Link>&nbsp;instead.
    </Message>
  </div>
);

export default SignUp;
