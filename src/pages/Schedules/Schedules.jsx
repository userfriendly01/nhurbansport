import React, { useContext, useState } from 'react'
import {
  StandardDropDown,
  Wrapper,
  Image,
  DisplayCard
} from '../../components'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import { StateContext } from '../../context/appContext.jsx'

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

const Schedules = () => {
  const context = useContext(StateContext);
  const activeSessions = context.state.leagueContext.leagues;
  const [ redirect, setRedirect ] = useState({
    value: "",
    redirect: false
  });

  const getSessionsWithSchedules = () => {
    let sessionsWithGames = [];
    activeSessions.map(session => {
      const schedule = session.schedule ? session.schedule : false;
      if(schedule) {
        sessionsWithGames.push(session);
      }
    });
    return sessionsWithGames;
  }

  const getSessionsWithoutSchedules = () => {
    let sessionsWithoutGames = [];
    activeSessions.map(session => {
      const schedule = session.schedule ? session.schedule : false;
      if(!schedule) {
        sessionsWithoutGames.push(session);
      }
    });
    return sessionsWithoutGames;
  }

    const handleCreate = option => {
      console.log("handleCreate Option: ", option);
      setRedirect({
        value: option.value,
        redirect: true
      });
    }

    return (
      <div>
      { redirect.value ? <Redirect to={`/add-schedule/${redirect.value}`} /> :
        <Wrapper direction="column" align="center">
            <Wrapper>
                <Image id="Schedules Banner"
                  width="650px"
                  height="230px">
                </Image>
            </Wrapper>
            <StyledWrapper justify="space-around">
                {
                  getSessionsWithSchedules().map((session, index) => (
                      <div key={`session${index}`} >
                        <DisplayCard margin="5" >
                          <Wrapper direction="column">
                          <StyledLink to={`/schedule/${session.sessionId}`}>
                            <Wrapper direction="column" width="200" align="center">
                              <StyledImage src={session.image} />
                              <DisplayCard size="14">{session.sessionFriendlyName}</DisplayCard>
                            </Wrapper>
                          </StyledLink>
                        </Wrapper>
                      </DisplayCard>
                    </div>
                  ))
                }
            </StyledWrapper>
            <Wrapper margin="5" align="center">Create a new schedule:
              <StandardDropDown 
                isSearchable={false} 
                width="300"
                label={"sessionFriendlyName"}
                value={"sessionId"}
                options={getSessionsWithoutSchedules()} 
                updateFunction={handleCreate} />
            </Wrapper>
        </Wrapper>
      }
    </div>
  );
}

export default Schedules;