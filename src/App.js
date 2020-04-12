import React, { Component } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('mount');
    this.getResults();
  }

  getResults = () => {
    axios.get('https://hn.algolia.com/api/v1/items/1')
      .then((response) => {
        let result = response.data;
        //  this.setState({ results: result });
        console.log('result:', result);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Footer />
        {/* <header className="App-header"> */}
        {/* </header> */}
      </div>
    );
  }

}

export default App;
