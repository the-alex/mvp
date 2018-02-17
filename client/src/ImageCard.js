import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const ImageCard = (cardInfo, labels) => (
  <Card>
    <Image src={cardInfo.cardInfo.url} />
    <Card.Content>
      <Card.Header>{cardInfo.cardInfo.title}</Card.Header>
      <Card.Description>
        <ul>
          {cardInfo.labels.map((label, index) => (
            <li key={index}>
              {label.name}, {label.score}
            </li>
          ))}
        </ul>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default ImageCard;
