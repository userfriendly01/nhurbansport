import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import styled from 'styled-components'
import { setData } from '../util/SetData.jsx'

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #D8D8D8;
    white-space: nowrap;
`;

const App = () => {
    setData();
    return (
        <MainContainer>
            <Header/>
            <Footer/>
        </MainContainer>
    );

};

export default App;