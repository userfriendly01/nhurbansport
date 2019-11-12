import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import styled from 'styled-components'
import { getImageObject } from '../ImageUpload'
import { 
  setDocumentContext,
  setLeagueContext, 
  setImages, 
  StateContext, 
  setImageData
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
    // console.log("The context provider object: ", StateContextProvider);
    console.log("The progression of the context", context);
    
    return (
      // <StateContextProvider>
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
      // </StateContextProvider>
    );
};

export default App;