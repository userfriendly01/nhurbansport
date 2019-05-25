import React from 'react'
import styled from 'styled-components'
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';


const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    min-width: 650px;
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

const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10 10;
    background-color: white;
    text-align: center;
    max-width: 200px;
`;


const OptionImage = styled.div`
    background-image: ${props => props.img};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 10;
    min-width: 180px;
    min-height: 180px;
`;

const OptionText = styled.div`
    padding-top: 2;
    margin: 0 10;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    white-space: pre-line;
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
            <OptionsContainer>
                <OptionContainer>
                    <OptionText size="16" weight="bold">SPORTS LEAGUES</OptionText>
                    <OptionText>__</OptionText>
                    <OptionText size="13" weight="normal">From the couch potato to the weekend warrior, we have a sport for you.</OptionText>
                    <OptionImage img='url("/src/images/home-option-1-img.jpg")'/>
                </OptionContainer>
                <OptionContainer>
                    <OptionText size="16" weight="bold">JOIN OUR EMAIL LIST</OptionText>
                    <OptionText>__</OptionText>
                    <OptionText size="13" weight="normal">Join our emails for league updates. Don't worry. We don't like spam either.</OptionText>
                    <OptionImage img='url("/src/images/home-option-2-img.jpg")'/>
                </OptionContainer>
                <OptionContainer>
                    <OptionText size="16" weight="bold">PLAYER PORTAL</OptionText>
                    <OptionText>__</OptionText>
                    <OptionText size="13" weight="normal">Create an account to explore the forums for updated rosters, rules, and rankings.</OptionText>
                    <OptionImage img='url("/src/images/home-option-3-img.jpg")'/>
                </OptionContainer>
            </OptionsContainer>
            <About/>
            <Contact/>
        </HomeContainer>
    );
}

export default Home;