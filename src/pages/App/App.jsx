import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import styled from 'styled-components'
import { getImageObject } from '../ImageUpload'
import { 
  setDocumentContext,
  setLeagueContext, 
  setImageContext, 
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
    const [ loading, setLoading ] = useState(true);
    const { state } = useContext(StateContext);

    useEffect(() => {
      setDocumentContext(state);
      setImageContext(state);
      setLeagueContext(state);
      getImageObject().then(() => {
        setLoading(false);
      });
    }, [])

    return (
        <MainContainer>
          { loading ?
            <div>LOADING</div>
            :
            <div>
              <Header/>
              <Footer/>
            </div>
          }
        </MainContainer>
    );
};

export default App;