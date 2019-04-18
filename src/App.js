import React, { Component } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import styled from 'styled-components';

class App extends Component {


  render() {
    const AppContainer = styled.div`
      padding:0px 300px;
      background-color: #f2f2f2;
      height: 1200px;
    `;

    return (
        <AppContainer className="App">
          <Header />
          <Footer />
        </AppContainer>
    );
  }
}


export default App;
