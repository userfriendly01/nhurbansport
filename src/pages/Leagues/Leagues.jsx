import React, { useState, useContext } from 'react'
import {
    Container,
    Image,
    Text,
    TextContainer
} from '../../components'
import AddLeagueButton from './AddLeagueButton.jsx'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StateContext } from '../../context/appContext.jsx'

const StyledImage = styled.img`
  width: 200;
  height: 180
`;
const Leagues = () => {
    const context = useContext(StateContext);
    const activeSessions = context.state.leagueContext.leagues;
    
    return (
        <Container direction="column" align="center">
            <Container>
                <Image url="/src/images/league-banner-img.jpg"
                       width="650px"
                       height="320px">
                    <TextContainer bcolor="#0066ff" position="absolute" opacity="0.8">
                        <Text color="white" opacity="1" size="32">Leagues</Text>
                        <Text color="white" size="16">To register for a league, choose your sport, select the number of players, and click “Add to Cart.” It's that easy.</Text>
                    </TextContainer>
                </Image>
            </Container>
            <Container width="660px" wrap="wrap">
                {
                  activeSessions.map((session, index) => (
                      <div key={`session${index}`} >
                        {console.log(session)}
                        <Container direction="column" width="200px">
                          <StyledImage src={session.image} />
                          <Text size="14">{session.name}</Text>
                          <Text size="14">{session.location} | {session.day} ({session.length})</Text>
                          <Text>__</Text>
                          <Text size="13" weight="normal">{session.price}</Text>
                        </Container>
                      </div>
                  ))
                }
                <Link to="/add-league">
                  <AddLeagueButton/>
                </Link>
            </Container>
        </Container>
    );
}

export default Leagues;