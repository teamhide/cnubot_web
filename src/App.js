import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Section/Home';
import About from './components/Section/About';
import Footer from './components/Footer';
import Modal from './components/Section/Modal';
import Student1 from './components/Section/Student1';
import Student2 from './components/Section/Student2';
import Student3 from './components/Section/Student3';
import Sangrok from './components/Section/Sangrok';
import Science from './components/Section/Science';
import Dormitory from './components/Section/Dormitory';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <section>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/student1" component={Student1} />
            <Route exact path="/student2" component={Student2} />
            <Route exact path="/student3" component={Student3} />
            <Route exact path="/science" component={Science} />
            <Route exact path="/sangrok" component={Sangrok} />
            <Route exact path="/dormitory" component={Dormitory} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
