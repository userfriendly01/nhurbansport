import React from 'react'
import styled from 'styled-components';

    
const Home = () => {

    const PhotoContainer = styled.div`
        border-style: solid;
        height: 400px;
        background-image: url("https://images-na.ssl-images-amazon.com/images/I/91FOeSuXvIL._SX522_.jpg");
        background-size: auto;
        margin-left: auto;
        margin-right: auto;
    `;

    const LinkContainer = styled.div`
        margin: auto;
        border: 3px solid black;
        margin-top: 15px;
    `;

    const LinkBox = styled.span`
        border-style: solid;
        display: inline-block;
        height: 400px;
        width: 400px;
        background-image: url("https://images-na.ssl-images-amazon.com/images/I/91FOeSuXvIL._SX522_.jpg");
        background-size: cover;
        margin-left: 20px;
        margin-right: 20px;
    `;

        return (
            <div>  
                <div id="home-banner">   
                    <PhotoContainer />
                    <LinkContainer >
                        <LinkBox />
                        <LinkBox />
                        <LinkBox />  
                    </LinkContainer>
                                          
                </div>
            </div>
        );
    }



export default Home;