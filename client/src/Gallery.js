import React from 'react';
import ImageCard from './ImageCard.js';

const Gallery = props => (
  <div>
    <p>There are {props.cards.length} cards available</p>
    {props.cards.map((card, index) => (
      <ImageCard key={index} cardInfo={card} labels={card.labels} />
    ))}
  </div>
);

export default Gallery;
