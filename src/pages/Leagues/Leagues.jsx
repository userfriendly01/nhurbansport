import React, { useContext } from 'react'
import {
  AddButton,
  Container,
  Wrapper,
  Image,
  Text,
  TextContainer,
  DisplayCard
} from '../../components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StateContext } from '../../context/appContext.jsx'

//Add dropdown for admin to see closed leagues

const StyledImage = styled.img`
  width: 200;
  height: 180
`;

const StyledLink = styled(Link)`
  &:hover{
    text-decoration: none;
    color: pink;
  }
`;

const StyledWrapper = styled(Wrapper)`
    flex-wrap: wrap;
    width: 650px;
    margin-top: 10px;
    &:hover{
      text-decoration: none;
      color: pink;
    }
`;

const StyledDisplayCard = styled(DisplayCard)`
  flex-direction: column;
  padding: 0px;
  margin: 10 0;
`;

const StyledParagraph = styled.p`
  margin: 0px;
  color: black;
  font-size: ${props => props.size ? props.size : "12px"};
  font-weight: ${props => props.weight ? props.weight : "normal"};
`;

const Leagues = () => {
    const context = useContext(StateContext);
    const activeSessions = context.state.leagueContext.leagues;
    
    return (
        <Container direction="column" align="center">
            <Container>
                <Image id="Leagues Banner"
                  width="650px"
                  height="320px">
                    <TextContainer bcolor="#0066ff" position="absolute" opacity="0.8">
                        <Text color="white" opacity="1" size="32">Leagues</Text>
                        <Text color="white" size="16">To register for a league, choose your sport, select the number of players, and click “Add to Cart.” It's that easy.</Text>
                    </TextContainer>
                </Image>
            </Container>
            <StyledWrapper>
                {
                  activeSessions.map((session, index) => (
                      <div key={`session${index}`} >
                        <StyledLink to={`/league/${session.sessionId}`}>
                          <Wrapper direction="column" width="200">
                          <StyledDisplayCard>
                            <StyledImage src={session.image} />
                              <StyledParagraph size="14">{session.name}</StyledParagraph>
                              <StyledParagraph >{session.location} | {session.day} ({session.length})</StyledParagraph>
                              <StyledParagraph>__</StyledParagraph>
                              <StyledParagraph>{session.price}</StyledParagraph>
                            </StyledDisplayCard>
                          </Wrapper>
                        </StyledLink>
                      </div>
                  ))
                }
                <AddButton to="/add-league" />
            </StyledWrapper>
        </Container>
    );
}

export default Leagues;