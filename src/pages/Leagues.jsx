import React from 'react'
import styled from 'styled-components'

const LeagueContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LeagueBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
`;

const LeagueBannerImage = styled.div`
    background-image: url("/src/images/league-banner-img.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-width: 600px;
    min-height: 320px;
    position: relative;
`;

const LeagueBannerTextContainer = styled.div`
    background-color: #0066ff;
    text-align: center;
    opacity: 0.8;
    position: absolute;
    bottom: 0; 
    min-width: 100%;
`;

const LeagueBannerText = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.size};
    opacity: 1;
`;

const Home = () => {
    return(
        <LeagueContainer>
            <LeagueBannerContainer>
                <LeagueBannerImage>
                    <LeagueBannerTextContainer>
                        <LeagueBannerText color="white" size="32">Leagues</LeagueBannerText>
                        <LeagueBannerText color="white" size="15">To register for a league, choose your sport, select the number of players, and click “Add to Cart.” It's that easy.</LeagueBannerText>
                    </LeagueBannerTextContainer>
                </LeagueBannerImage>
            </LeagueBannerContainer>
        </LeagueContainer>
    );
}

export default Home;