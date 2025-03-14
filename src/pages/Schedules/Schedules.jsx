import React, { useContext, useState } from 'react'
import {
  StandardDropDown,
  Wrapper,
  Image,
  DisplayCard
} from '../../components'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import { updateSession} from "../../service/Database"
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
        let sessionObject = {
          label: session.sessionFriendlyName,
          value: session.sessionId
        }
        sessionsWithoutGames.push(sessionObject);
      }
    });
    return sessionsWithoutGames;
  }

    const handleCreate = selection => {
      const session = activeSessions.find(obj => obj.sessionId === selection.value);
      const newSession = {
        ...session,
        schedule : { 
          published: false, 
          groups: [] 
        }
      }
      updateSession(session.sessionId, newSession, context).then(() => {
        setRedirect({
          value: selection.value,
          redirect: true
        });
      });
    }

    return (
      <div>
      { redirect.redirect ? <Redirect to={`/add-schedule/${redirect.value}`} /> :
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
                <StandardDropDown props={{
                    isSearchable: false,
                    placeholder: "Select Session"
                  }}
                  styles={{width: "300"}}
                  options={getSessionsWithoutSchedules()} 
                  updateFunction={selection => handleCreate(selection)} />
            </Wrapper>
        </Wrapper>
      }
    </div>
  );
}

export default Schedules;