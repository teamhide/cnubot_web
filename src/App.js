import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Section/Home';
import About from './components/Section/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <section>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
