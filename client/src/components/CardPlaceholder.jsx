import React from 'react';
import Placeholder from 'react-placeholder';
import { Card, Segment } from 'semantic-ui-react';

const CardPlaceholder = () => (
  <Card centered>
    <Placeholder
      type="rect"
      style={{ width: `${100}%`, height: 250 }}
      ready={false}
    >
      {' '}
    </Placeholder>
    <Card.Content>
      <Segment vertical textAlign="center">
        <Placeholder type="text" showLoadingAnimation rows={9} ready={false}>
          {' '}
        </Placeholder>
      </Segment>
    </Card.Content>
  </Card>
);

export default CardPlaceholder;
