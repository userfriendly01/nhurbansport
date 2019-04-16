import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends Component {


  render() {
    const routing = (
      <Router>
          <div>
              <Route exact path = "/" component={Home} />
              <Route path = "/about" component={About} />
          </div>
      </Router>
    )

    return (
        <div className="App">
        <Header />
          <div>
            {routing}
          </div>
          <Footer />
        </div>
    );
  }
}


export default App;
