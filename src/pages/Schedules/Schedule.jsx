import React, { useState, useContext } from "react"
import {
  DisplayCard,
  Wrapper,
  EditIcon,
  DeleteIcon,
} from "../../components"
import ScheduleGroup from "./ScheduleGroup.jsx"
import styled from 'styled-components'
import {
  deleteSchedule
} from "../../service/Database"
import { StateContext } from '../../context/appContext.jsx'
import { Redirect } from 'react-router-dom'

const StyledTitle = styled(Wrapper)`
  width: 380;
  color: #483d8b;
  padding: 1% 1% 1% 3%;
  font-weight: bold;
`
const Schedule = ({match}) => {
  const context = useContext(StateContext);
  const sessionId = match.params.id;
  const sessions = context.state.leagueContext.leagues;
  const session = sessions.find(obj => obj.sessionId === sessionId) ? sessions.find(obj => obj.sessionId === sessionId) : {};
  const scheduleGroups = session.schedule.groups;
  const [ redirect, setRedirect ] = useState(false)

  const handleDelete = () => {
    deleteSchedule(session.sessionId, context).then(() => {
      
    });
    setRedirect(true);
  };

   return (
     <>
      {redirect ?
        <Redirect to="/schedules"/>
        :
        <DisplayCard width="600" bcolor="F5F5F5" border="5px solid white" direction="column">
          <Wrapper direction="column" align="center" width="100%">
            <Wrapper justify="center" margin="7">
              <EditIcon route="/edit-schedule" id={sessionId} />
              <DeleteIcon deleteFunction={handleDelete}/>
            </Wrapper>
            <Wrapper>
              <StyledTitle>{session.sessionFriendlyName} Schedule</StyledTitle>
            </Wrapper>
              { 
                scheduleGroups.map(group => (
                  <ScheduleGroup key={group.groupId} groupId={group.groupId} edit={false} form={session.schedule} />
                ))
              }
          </Wrapper>
        </DisplayCard>
      }
    </>
  )
}

export default Schedule;