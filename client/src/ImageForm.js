import React, {Component} from 'react';

class ImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {urlInput: '', titleInput: ''};

    this.handleClick = this.handleClick.bind(this);
    this.updateImageUrlTextState = this.updateImageUrlTextState.bind(this);
    this.updateImageTitleTextState = this.updateImageTitleTextState.bind(this);
  }

  updateImageUrlTextState(event) {
    console.log('triggered url update');
    let newInputValue = event.target.value;
    this.setState({urlInput: newInputValue});
  }

  updateImageTitleTextState(event) {
    console.log('triggered title update');
    let newInputValue = event.target.value;
    console.log(newInputValue)
    this.setState({titleInput: newInputValue});
  }

  handleClick(event) {
    console.log('Handling click ...')
    this.props.addCard(this.state.urlInput, this.state.titleInput);
  }

  render() {
    return (
      <div>
        {'Image Title: '}<input onChange={this.updateImageTitleTextState} type="text" />
        {'Image URL: '}<input onChange={this.updateImageUrlTextState} type="text" />
        <button onClick={this.handleClick}>Submit URL!</button>
      </div>
    );
  }
}

export default ImageForm;
