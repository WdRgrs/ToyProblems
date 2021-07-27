import React, { Component } from 'react';

class Sum extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          number1: 0,
          number2: 0,
          sum: null
        }
        this.modNum1 = this.updateNumber1.bind(this);
        this.modNum2 = this.updateNumber2.bind(this);
        this.sumNums = this.add.bind(this);
      }
    
      updateNumber1(a) {
        this.setState({ number1: +a });
      }
    
      updateNumber2(b) {
        this.setState({ number2: +b });
      }
    
      add(a, b) {
        this.setState({ sum: a + b });
      }
    
      render() {
        return (
          <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }/>
            <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
            <span className="resultsBox"> Sum: {this.state.sum} </span>
          </div>
        )
      }
    }
export default Sum;