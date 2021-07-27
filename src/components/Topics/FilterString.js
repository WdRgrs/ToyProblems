import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
    
        this.state = {
          strings: ['Everybody', 'Yes', 'no', 'negative', 'help', 'this', 'think', 'okay', 'wow', 'I', 'am', 'bad', 'at', 'code'],
          userInput: '',
          filteredStrings: []
        };
      }
    
      handleChange(x) {
        this.setState({ userInput: x });
      }
    
      filterStrings(userInput) {
        let strings = this.state.strings;
        let filteredStrings = [];
    
        for ( let i = 0; i < strings.length; i++ ) {
          if ( strings[i].includes(userInput) ) {
            filteredStrings.push(strings[i]);
          }
        }
    
        this.setState({ filteredStrings: filteredStrings });
      }
    
      render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Strings: { JSON.stringify(this.state.strings, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.filterStrings(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Strings: { JSON.stringify(this.state.filteredStrings, null, 10) } </span>
          </div>
        )
      }
    }
    
    export default FilterString;