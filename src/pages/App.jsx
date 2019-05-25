import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #D8D8D8;
    height: 100%;
`;

const App = () =>{
    return (
        <MainContainer>
            <Header/>
            <Footer/>
        </MainContainer>
    );

};

export default App;