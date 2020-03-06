import React, { useContext } from 'react'
import {
  AddButton,
  Wrapper,
  Image,
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
  color: black;
  &:hover{
    text-decoration: none;
    color: black;
  }
`;

const StyledWrapper = styled(Wrapper)`
  align-items: center;
  flex-wrap: wrap;
  width: 650px;
  margin-top: 10px;
`;


const Leagues = () => {
    const context = useContext(StateContext);
    const activeSessions = context.state.leagueContext.leagues;
    
    return (
        <Wrapper direction="column" align="center">
            <Wrapper>
                <Image id="Leagues Banner"
                  width="650px"
                  height="320px">
                </Image>
            </Wrapper>
            <StyledWrapper>
                {
                  activeSessions.map((session, index) => (
                      <div key={`session${index}`} >
                        <StyledLink to={`/league/${session.sessionId}`}>
                          <DisplayCard margin="5">
                            <Wrapper direction="column" width="200" align="center">
                              <StyledImage src={session.image} />
                              <DisplayCard size="14">{session.name}</DisplayCard>
                              <DisplayCard size="11">{session.location} | {session.day}</DisplayCard>
                              <DisplayCard size="11">({session.length})</DisplayCard>
                              <DisplayCard size="11">{session.price}</DisplayCard>
                            </Wrapper>
                          </DisplayCard>
                        </StyledLink>
                      </div>
                  ))
                }
                <AddButton to="/add-league" />
            </StyledWrapper>
        </Wrapper>
    );
}

export default Leagues;