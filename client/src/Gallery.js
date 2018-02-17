import React from 'react';
import ImageCard from './ImageCard.js';
import {Grid} from 'semantic-ui-react';

const Gallery = props => (
  <div>
    <p>There are {props.cards.length} cards available</p>
    <Grid>
      {props.cards.map((card, index) => (
        // Add row for every third ...
        <Grid.Column width={4} key={index}>
          <ImageCard key={index} cardInfo={card} labels={card.labels} />
        </Grid.Column>
      ))}
    </Grid>
  </div>
);

export default Gallery;
