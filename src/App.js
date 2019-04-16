import React, { Component } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import About from './pages/About.js'



class App extends Component {
 constructor(props){
   super(props);
   this.state = {
    content: <Home />
   };
   this.updateView = this.updateView.bind(this);
 }
 
 updateView(page){
  this.setState(state => ({
    content: page
  }));
}

  render() {
    const viewUpdater = (view) => this.updateView(view);
    return (
        <div className="App">
          <div>
            content is {this.state.content}
          </div>
          <Footer updateViewFunction={viewUpdater}/>
        </div>
    );
  }
}

export default App;
