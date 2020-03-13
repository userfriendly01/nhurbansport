import React, { useState, useContext } from "react"
import {
  DisplayCard,
  Wrapper
} from "../../components"
import ScheduleGroup from "./ScheduleGroup.jsx"
import styled from 'styled-components'
import { StateContext } from '../../context/appContext.jsx'
import {
  updateSession,
  getSession,
  createScheduleGroup
 } from "../../service/Database"
 import { Redirect } from 'react-router-dom'

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
  const [redirect, setRedirect] = useState({
    state: false,
    to: ""}
  );

  const handleCreateScheduleGroup = () => {
    createScheduleGroup(sessionId, { 
        label: "",
        date: "",
        games: [] }, context)
  };

  const handleCancel = () => {
    getSession(sessionId).then(originalSession => {
      const index = sessions.map(session => { return session.sessionId; }).indexOf(sessionId);
      sessions.splice(index, 1);
      sessions.splice(index, 0, originalSession);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          leagues: sessions
        }
      });
      setRedirect({
        state: true,
        to: "/schedules"
      });
    })
  }

  const saveSchedule = publish => {
    if(publish){
      scheduleForm.published = true;
    } else {
      scheduleForm.published = false;
    }

    const newSession = {
      ...session,
      schedule: scheduleForm
    }
    updateSession(sessionId, newSession, context).then(() => {
      setRedirect({
        state: true,
        to: `/schedule/${sessionId}`
      });
    })
  }

  return (
    <>
      {redirect.state ?
        <Redirect to={redirect.to}/>
        : 
        <DisplayCard width="600" bcolor="F5F5F5" border="5px solid white" direction="column">
      <Wrapper direction="column" align="center" width="100%">
        <Wrapper>
          <StyledTitle>{session.sessionFriendlyName} Schedule</StyledTitle>
        </Wrapper>
          {   
            scheduleForm.groups.map(group => (
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
                <StyledButton onClick={handleCancel}>Cancel</StyledButton>
              </Wrapper>
              <Wrapper>
                <StyledButton onClick={() => saveSchedule(false)} >Save as draft</StyledButton>
                <StyledButton onClick={() => saveSchedule(true)} >Publish Schedule</StyledButton>
              </Wrapper>
            </Wrapper>
          </Wrapper>
      </Wrapper>
    </DisplayCard>
      }
    </>
  )
}

export default Schedule;