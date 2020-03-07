import React, { useState, useContext } from "react"
import {
  DisplayCard,
  Wrapper,
  EditIcon,
  DeleteIcon,
} from "../../components"
import ScheduleGroup from "./ScheduleGroup.jsx"
import styled from 'styled-components'
import { StateContext } from '../../context/appContext.jsx'

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
  // const teams = session.sessionTeams ? session.sessionTeams : [];
  const scheduleGroups = session.schedule.scheduleGroups;

  const handleDelete = rulebookId => {
    //Include confirmation message that all games will be deleted
    // deleteSchedule(rulebookId).then(() => {
    //   const deleteIndex = rulebooks.map(deletedRulebook => { return deletedRulebook.ruleBookId; }).indexOf(rulebookId);
    //   rulebooks.splice(deleteIndex, 1);
    //   context.setState({
    //     ...context.state,
    //     leagueContext: {
    //       ...context.state.leagueContext,
    //       leagues: [
    //         ...context.state.leagueContext.leagues
    //         //Get to specific league: replace sessionGames with empty array
    //       ]
    //     }
    //   });
    // });
  };

   return (
    <DisplayCard width="600" bcolor="F5F5F5" border="5px solid white" direction="column">
      <Wrapper direction="column" align="center" width="100%">
        <Wrapper justify="center" margin="7">
          <EditIcon route="/edit-schedule" id={sessionId} />
          <DeleteIcon deleteFunction={() => handleDelete(session.sessionId)}/>
        </Wrapper>
        <Wrapper>
          <StyledTitle>{session.sessionFriendlyName} Schedule</StyledTitle>
        </Wrapper>
          { 
            scheduleGroups.map(group => (
              <ScheduleGroup group={group} edit={false} form={session.schedule} />
            ))
          }
      </Wrapper>
    </DisplayCard>
  )
}

export default Schedule;