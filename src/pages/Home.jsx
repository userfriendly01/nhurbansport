import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
`;

const HomeBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
`;

const HomeBannerImage = styled.div`
    background-image: url("/src/images/home-banner-img.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-width: 600px;
    min-height: 320px;
    position: relative;
`;

const HomeBannerTextContainer = styled.div`
    background-color: #0066ff;
    text-align: center;
    opacity: 0.8;
    position: absolute;
    bottom: 0; 
    min-width: 100%;
`;

const HomeBannerText = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.size};
    opacity: 1;
`;

const Home = () => {
    return(
        <HomeContainer>
            <HomeBannerContainer>
                <HomeBannerImage>
                    <HomeBannerTextContainer>
                        <HomeBannerText color="white" size="32">NH Urban Sport</HomeBannerText>
                        <HomeBannerText color="yellow" size="15">CO-ED ADULT SPORTS LEAGUE</HomeBannerText>
                        <HomeBannerText color="white" size="10">COMMUNITY | COMPETITION | CAMARADERIE</HomeBannerText>
                    </HomeBannerTextContainer>
                </HomeBannerImage>
            </HomeBannerContainer>
        </HomeContainer>
    );
}

export default Home;