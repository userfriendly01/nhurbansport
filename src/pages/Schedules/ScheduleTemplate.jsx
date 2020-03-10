import React, { useState, useContext, useEffect } from "react"
import {
  DisplayCard,
  Wrapper
} from "../../components"
import ScheduleGroup from "./ScheduleGroup.jsx"
import styled from 'styled-components'
import { StateContext } from '../../context/appContext.jsx'
import { 
  getSchedule,
  updateSession,
  createScheduleGroup
 } from "../../service/Database"

const StyledTitle = styled(Wrapper)`
  width: 550;
  color: #483d8b;
  padding: 1% 1% 1% 3%;
  font-weight: bold;
`
const StyledButton = styled.button`
  margin: 5;
  width: 150;
  height: 30;
  font-size: 13;
  align-self: flex-end;
`

const Schedule = ({match}) => {
  const context = useContext(StateContext);
  const sessionId = match.params.id;
  const sessions = context.state.leagueContext.leagues;
  const session = sessions.find(obj => obj.sessionId === sessionId) ? sessions.find(obj => obj.sessionId === sessionId) : {};
  const schedule = session.schedule ? session.schedule : { published: false, groups: [] };
  const [scheduleForm, setScheduleForm] = useState(schedule);
  const scheduleGroups = scheduleForm.groups;

  useEffect(() => {
    console.log("The use Effect kicked off", session.schedule)
    if(!session.schedule){
      console.log("The useEffect reset it")
      const newSession = {
        ...session,
        schedule
      }
      updateSession(sessionId, newSession);
    }
  });
  
  console.log("This is the form for the schedule render: ", session)
  console.log("This is the schedule form: ", scheduleForm)

  const handleCreateScheduleGroup = () => {
    createScheduleGroup(sessionId, { 
        label: "",
        date: "",
        games: [] }
      , context).then(() => {
        // setReloadOnSave(!reloadOnSave);
      });
  };

  const saveSchedule = publish => {
    getSchedule(sessionId).then(schedule => {
      if(publish){
        schedule.published = true;
      } else {
        schedule.published = false;
      }
      const newSession = {
        ...session,
        schedule: {
          ...schedule,
          groups: formatSchedule(schedule)
        }        
      }
      updateSession(sessionId, newSession).then(() => {
        // setReloadOnSave(!reloadOnSave);
      });
    });
  }

  const formatSchedule = schedule => {
    //Pass through the database schedule
    const formattedGroupsObject = {};
    for (let gr in schedule.groups) {
      const databaseGroup = schedule.groups[gr];
      const formGroup = scheduleForm.groups.find(obj => obj.groupId === gr);
      const formatedGamesObject = {};
        for (let ga in databaseGroup.games) {
          const databaseGame = databaseGroup.games[ga];
          const formGame = formGroup.games.find(obj => obj.gameId === ga);
            if (formGame){
              const newGame = {
                // ...databaseGame,
                location: formGame.location,
                time: formGame.time,
                homeTeam: formGame.homeTeam,
                homeTeamScore: formGame.homeTeamScore,
                awayTeam: formGame.awayTeam,
                awayTeamScore: formGame.awayTeamScore
              }
              formatedGamesObject[ga] = newGame;
          }
      };
      if (formGroup) {
        const newGroup = {
            // ...databaseGroup,
            date: formGroup.date,
            label: formGroup.label,
            games: formatedGamesObject
          }
          formattedGroupsObject[gr] = newGroup;
        }
      }
    return formattedGroupsObject;
  }

  return (
    <DisplayCard width="600" bcolor="F5F5F5" border="5px solid white" direction="column">
      <Wrapper direction="column" align="center" width="100%">
        <Wrapper>
          <StyledTitle>{session.sessionFriendlyName} Schedule</StyledTitle>
        </Wrapper>
          { 
            scheduleGroups.groups.map(group => (
              <ScheduleGroup 
                key={group.groupId} 
                sessionId={sessionId}
                groupId={group.groupId} 
                edit={true} 
                form={scheduleForm} 
                setForm={setScheduleForm} />
            ))
          }
          <Wrapper width="550" direction="column">
            <Wrapper>
              <StyledButton onClick={handleCreateScheduleGroup}>Create Schedule Group</StyledButton>
            </Wrapper>
            <Wrapper justify="space-around">
              <Wrapper>
                <StyledButton>Cancel</StyledButton>
              </Wrapper>
              <Wrapper>
                <StyledButton onClick={() => saveSchedule(false)} >Save as draft</StyledButton>
                <StyledButton onClick={() => saveSchedule(true)} >Publish Schedule</StyledButton>
              </Wrapper>
            </Wrapper>
          </Wrapper>
      </Wrapper>
    </DisplayCard>
  )
}

export default Schedule;