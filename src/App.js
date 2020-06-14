import React, { Component } from 'react';
import { Header, Slider, Footer } from './components';
import API from './api/api'
import './styles.css'

const api = new API();

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedId: 1,
      char: {
        origin: {name:''},
        image: '',
        status: '',
        species: '',
      }
    }
  }

  async componentDidMount() {
    let id = this.state.selectedId;
    let data = await api.getCharacter(id);
    this.setState({ char: data })
  }

  nextChar = async () => {
    let id = this.state.selectedId;

    if (id === 591) {
      id = 1;
    }
    else {
      id++;
    }
    this.setState({ selectedId: id })

    let data = await api.getCharacter(id);
    this.setState({ char: data })
  }

  prevChar = async () => {
    let id = this.state.selectedId;

    if (id === 1) {
      id = 591
    }
    else {
      id--;
    }
    this.setState({ selectedId: id })

    let data = await api.getCharacter(id);
    this.setState({ char: data })
  }

  render() {
    return (
      <main>
        <Header />
        
        <div className = "flex-container">

          <div className = "buttonContainerL">
            <button onClick={this.prevChar}>
              &#60;
            </button>
          </div>
          
          <Slider char={this.state.char} />

          <div className = "buttonContainerR">
            <button onClick={this.nextChar}>
              &#62;
            </button>
          </div>
        </div>

        <Footer/>
      </main>
    );
  }
}

export default App;
