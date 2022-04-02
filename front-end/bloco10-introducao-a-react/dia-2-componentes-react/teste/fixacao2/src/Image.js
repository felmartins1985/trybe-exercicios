// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />; 
    // eu retorno uma imagem com props source e alternativeText
  }
}

export default Image;