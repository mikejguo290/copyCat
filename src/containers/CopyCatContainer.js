import React from 'react';
import ReactDOM from 'react-dom';
import {CopyCat} from '../components/CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true
    };

    this.toggleTape = this.toggleTape.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    return <CopyCat copying={this.state.copying} toggleTape={this.toggleTape}/>
  };
}


ReactDOM.render(<CopyCat />, document.getElementById('app'));