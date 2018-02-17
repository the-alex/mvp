import React, {Component} from 'react';
import axios from 'axios';
import Gallery from './Gallery.js';
import 'semantic-ui-css/semantic.min.css';
import {Container, Header, Icon} from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  updateCardData() {
    axios.get('/api/cards').then(results => {
      console.log(
        `App.js::updateCardData: Recieved ${
          results.data.length
        } records from API.`,
      );
      this.setState({
        cards: results.data,
      });
    });
  }

  componentDidMount() {
    this.updateCardData();
  }

  render() {
    return (
      <Container>
        <Header as="h2" icon textAlign="center">
          <Icon name="image" circular />
          <Header.Content>Google Computer Vision API Demo</Header.Content>
        </Header>
        <Gallery cards={this.state.cards} />
      </Container>
    );
  }
}

export default App;
