import React from 'react';
import {styles} from '../style.js'

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export class CopyCat extends React.Component {
// presentational
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    
    return (
      <div style = {styles.divStyles}>
        <h1 style = {{ marginBottom: 80}} >Copy Cat</h1>
        <input type="text" value={} onChange={} />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
      </div>
    );
  };
}


