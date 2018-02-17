import React, {Component} from 'react';
import axios from 'axios';
import Gallery from './Gallery.js';
import 'semantic-ui-css/semantic.min.css';
import {Container} from 'semantic-ui-react';

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
        <p>This is an example of some text.</p>
        <Gallery cards={this.state.cards} />
      </Container>
    );
  }
}

export default App;
