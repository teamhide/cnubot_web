import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Section/Home';
import About from './components/Section/About';
import Footer from './components/Footer';
import Lotto from './components/Section/Lotto';
import Honbab from './components/Section/Honbab';
import Student1 from './components/Section/Place/Student1';
import Student2 from './components/Section/Place/Student2';
import Student3 from './components/Section/Place/Student3';
import Sangrok from './components/Section/Place/Sangrok';
import Science from './components/Section/Place/Science';
import Dormitory from './components/Section/Place/Dormitory';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <section>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/lotto" component={Lotto} />
            <Route exact path="/honbab" component={Honbab} />
            <Route exact path="/dormitory" component={Dormitory} />
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
