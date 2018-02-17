import React from 'react';
import {Header, Icon} from 'semantic-ui-react';

const Gallery = props => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="image" circular />
      <Header.Content>Google Computer Vision API Demo</Header.Content>
    </Header>
    <p>There are {props.cards.length} cards available</p>
  </div>
);

export default Gallery;
