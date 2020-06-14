import React, { Component } from 'react';
import './styles.css'

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    let data = this.props.char
    return (
      <div className = "slider">
        <img src={data.image} alt='' className="char-image" />
        <div className = "data">
          <h1 className = "title"> 
            {data.name}
          </h1>
          <p>
            Origen: {data.origin.name}
          </p>
          <p>
            Especie: {data.species}
          </p>
          <p>
            Status: {data.status}
          </p>
        </div>
        
      </div>
    )
  }
}



export default Slider;
