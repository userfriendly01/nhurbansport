import React, { useState, useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import styled from 'styled-components'
import { setData } from '../../service/SetApplication.jsx'
import { getImageObject } from '../ImageUpload'

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #EDEDEE;
    white-space: nowrap;
`;

const App = () => {

    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getImageObject().then(() => {
            setLoading(false);
        })
    })
    setData();
    return (
        <MainContainer>
            {loading ?
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