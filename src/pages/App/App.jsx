import React, { useContext } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import styled from 'styled-components'
import {
  StateContext
} from '../../context/appContext.jsx'

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #EDEDEE;
    white-space: nowrap;
`;

const App = () => {
  const context = useContext(StateContext);
  
  return (
    <MainContainer>
      { context == null ?
        <div>LOADING</div>
      :
        <>
          <Header/>
          <Footer/>
        </>
      }
    </MainContainer>
  );
};

export default App;