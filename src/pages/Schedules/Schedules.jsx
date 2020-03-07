import React, { useContext, useState } from 'react'
import {
  StandardDropDown,
  EditIcon,
  DeleteIcon,
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
      const games = session.sessionGames ? session.sessionGames : [];
      if(games.length !== 0) {
        sessionsWithGames.push(session);
      }
    });
    return sessionsWithGames;
  }

  const getSessionsWithoutSchedules = () => {
    let sessionsWithoutGames = [];
    activeSessions.map(session => {
      const games = session.sessionGames ? session.sessionGames : [];
      if(games.length === 0) {
        sessionsWithoutGames.push(session);
      }
    });
    return sessionsWithoutGames;
  }

    const handleDelete = rulebookId => {
      //Include confirmation message that all games will be deleted
      deleteSchedule(rulebookId).then(() => {
        const deleteIndex = rulebooks.map(deletedRulebook => { return deletedRulebook.ruleBookId; }).indexOf(rulebookId);
        rulebooks.splice(deleteIndex, 1);
        context.setState({
          ...context.state,
          leagueContext: {
            ...context.state.leagueContext,
            leagues: [
              ...context.state.leagueContext.leagues
              //Get to specific league: replace sessionGames with empty array
            ]
          }
        });
      });
    };

    const handleCreate = option => {
      console.log("handleCreate Option: ", option);
      setRedirect({
        value: option.value,
        redirect: true
      });
    }

    return (
      <div>
      { redirect.value ? <Redirect to={`/schedule/${redirect.value}`} /> :
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
                            <Wrapper justify="center" margin="7">
                              <EditIcon route="/edit-schedule" id={session.sessionId} />
                              <DeleteIcon deleteFunction={() => handleDelete(session.sessionId)}/>
                            </Wrapper>
                          <StyledLink to={`/edit-schedule/${session.sessionId}`}>
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