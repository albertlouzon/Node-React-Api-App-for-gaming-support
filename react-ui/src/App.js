import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      apiTest:{},
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })

      this.handleClick()
  }

  handleClick () {
    axios.get("/api")
      .then(response=>{
        console.log('riot api response: ',response)
        this.setState({
          apiTest:response.data
        })
      }
        )
  }

  render() {
    return (
      <div className="App">
        <pre className="App-intro">
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.apiTest.name}
        </pre>
        <p className="App-intro">
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.apiTest.summonerLevel}
        </p>
      </div>
    );
  }
}

export default App;
