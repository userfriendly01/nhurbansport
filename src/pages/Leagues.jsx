import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container.jsx'
import Image from '../components/Image.jsx'
import Text from '../components/Text.jsx'
import TextContainer from '../components/TextContainer.jsx'


const LeagueBannerImage = styled.div`
    background-image: url("/src/images/league-banner-img.jpg");
    background-size: 100% 100%;
    min-width: 650px;
    min-height: 320px;
    position: relative;
`;

const LeagueBannerTextContainer = styled.div`
    background-color: #0066ff;
    text-align: center;
    opacity: 0.8;
    position: absolute;
    bottom: 0; 
    white-space: pre-line;
    padding: 0 5 5 5;
`;

const LeagueBannerText = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.size};
`;

const LeaguesContainer = styled.div`
    align-items: center;
    margin-top: 10px;
    max-width: 660;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const League = styled.div`
    margin: 10 10;
    text-align: center;
    max-width: 200;
`;

const LeagueImage = styled.div`
    background-image: ${props => props.img};
    background-size: 100% 100%;
    border: 1px solid grey;
    margin: 10;
    min-width: 200;
    min-height: 180px;
`;

const LeagueText = styled.div`
    font-size: ${props => props.size};
    white-space: pre-line;
`;

const Leagues = () => {
    return(
        <div>
            <Container>
                <Image url="/src/images/league-banner-img.jpg"
                       width="650px"
                       height="320px">
                    <TextContainer bcolor="#0066ff" position="absolute" opacity="0.8">
                        <Text color="white" size="32">Leagues</Text>
                        <Text color="white" size="16">To register for a league, choose your sport, select the number of players, and click “Add to Cart.” It's that easy.</Text>
                    </TextContainer>
                </Image>
            </Container>
            <LeaguesContainer width="660px" wrap="wrap">
                <League>
                    <LeagueImage img='url("/src/images/home-option-1-img.jpg")'/>
                    <LeagueText size="14">Recreational Cornhole League in Manchester NH | Sundays (8 weeks)</LeagueText>
                    <LeagueText>__</LeagueText>
                    <LeagueText size="13" weight="normal">$40</LeagueText>
                </League>
                <League>
                    <LeagueImage img='url("/src/images/home-option-1-img.jpg")'/>
                    <LeagueText size="14">Recreational Cornhole League in Manchester NH | Sundays (8 weeks)</LeagueText>
                    <LeagueText>__</LeagueText>
                    <LeagueText size="13" weight="normal">$35</LeagueText>
                </League>
                <League>
                    <LeagueImage img='url("/src/images/home-option-1-img.jpg")'/>
                    <LeagueText size="14">Recreational Cornhole League in Manchester NH | Sundays (8 weeks)</LeagueText>
                    <LeagueText>__</LeagueText>
                    <LeagueText size="13" weight="normal">$30</LeagueText>
                </League>
                <League>
                    <LeagueImage img='url("/src/images/home-option-1-img.jpg")'/>
                    <LeagueText size="14">Recreational Cornhole League in Manchester NH | Sundays (8 weeks)</LeagueText>
                    <LeagueText>__</LeagueText>
                    <LeagueText size="13" weight="normal">$50</LeagueText>
                </League>
            </LeaguesContainer>
        </div>
    );
}

export default Leagues;