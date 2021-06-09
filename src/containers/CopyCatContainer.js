import React from 'react';
import ReactDOM from 'react-dom';
import {CopyCat} from '../components/CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input:'',
      name:'Garfield'
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const text = e.target.value;
    this.setState({input: text});
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    return <CopyCat copying={this.state.copying} toggleTape={this.toggleTape} handleChange={this.handleChange} input={this.state.input} name={this.state.name} />
  };
}