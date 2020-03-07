import React, { useState, useContext } from "react"
import {
  DisplayCard,
  Wrapper
} from "../../components"
import ScheduleGroup from "./ScheduleGroup.jsx"
import styled from 'styled-components'
import { StateContext } from '../../context/appContext.jsx'

const StyledTitle = styled(Wrapper)`
  width: 550;
  color: #483d8b;
  padding: 1% 1% 1% 3%;
  font-weight: bold;
`
const StyledButton = styled.button`
  margin: 0 15;
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
  const schedule = session.schedule ? session.schedule : {
    scheduleId: sessionId + "SH",
    scheduleGroups: []
};
  // const teams = session.sessionTeams ? session.sessionTeams : [];
  
  const [scheduleForm, setScheduleForm] = useState(schedule);
  const scheduleGroups = scheduleForm.scheduleGroups;
  const groupCount = scheduleGroups.length ? scheduleGroups.length : 0;
  console.log("This Render has this as the scheduleForm", scheduleForm)

  const createScheduleGroup = () => {
    //Add schedule group object to groups array with Id - This should rerender and show one group
    const testobj = {
      ...schedule,
      scheduleGroups: [ 
        ...schedule.scheduleGroups,
        { groupId: schedule.scheduleId + "G" + groupCount }
      ]
    }
    console.log("Gotta keep up with the schedule Form", testobj);

    setScheduleForm(testobj)
  };

  return (
    <DisplayCard width="600" bcolor="F5F5F5" border="5px solid white" direction="column">
      <Wrapper direction="column" align="center" width="100%">
        <Wrapper>
          <StyledTitle>{session.sessionFriendlyName} Schedule</StyledTitle>
        </Wrapper>
          { 
            scheduleGroups.map(group => (
              <ScheduleGroup group={group} edit={true} form={scheduleForm} setForm={setScheduleForm} />
            ))
          }
          <Wrapper width="550">
            <StyledButton onClick={createScheduleGroup}>Create Schedule Group</StyledButton>
            <StyledButton>Save Schedule</StyledButton>
          </Wrapper>
      </Wrapper>
    </DisplayCard>
  )
}

export default Schedule;