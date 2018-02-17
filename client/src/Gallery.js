import React from 'react';
import {Card} from 'semantic-ui-react';

const Gallery = props => (
  <div>
    <p>There are {props.cards.length} cards available</p>
    {props.cards.map((card, index) => (
      <Card
        key={index}
        image={card.url}
        header={card.title}
        description={`I'm ${
          card.labels[0].score
        } condifdent that this is a(n) ${card.labels[0].name}`}
      />
    ))}
  </div>
);

export default Gallery;
