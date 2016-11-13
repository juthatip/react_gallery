import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    img: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'],
    currentImg: 0,

  }

  handlePrev = () => {
    this.handleState(-1);
  }

  handleNext = () => {
    this.handleState(1);
  }

  handleState(index) {
    this.setState({
      currentImg: this.state.currentImg + index
    })
  }


  render() {
    const hide = {
      display: 'none'
    }
    const show = {
      display: 'block'
    }
    return (
      <div className="App">
          <img className="img" src={`http://localhost:3000/img/${this.state.img[this.state.currentImg]}`}  />

        <div className="nav">
          <a><i className="fa fa-chevron-circle-left" style={this.state.currentImg > 0 ? show : hide} onClick={this.handlePrev} ></i></a>
          <a><i className="fa fa-chevron-circle-right" style={this.state.currentImg >= this.state.img.length - 1 ? hide : show  } onClick={this.handleNext}></i></a>
        </div>
      </div>
    );
  }
}

export default App;
