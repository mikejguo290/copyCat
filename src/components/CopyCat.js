import React from 'react';
import {styles} from '../style.js'
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export class CopyCat extends React.Component {
// presentational
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    
    const value = this.props.input;
    const handleChange = this.props.handleChange;

    const imgStyles = styles.imgStyles;
    const divStyles = styles.divStyles;

    return (
      <div style = {divStyles}>
        <h1 style = {{ marginBottom: 80}} >Copy Cat {this.props.name || 'Tom'}</h1>
        <input type="text" value={value} onChange={handleChange} />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={imgStyles}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  name: PropTypes.string,
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}


