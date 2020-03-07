import React, { useState, useContext } from "react"
import {
  DisplayCard,
  Wrapper
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
const StyledButton = styled.button`
  margin: 0 15;
  width: 150;
  height: 30;
  font-size: 13;
  align-self: flex-end;
`

const scheduleObject = {
  scheduleId: 1234,
  scheduleGroups: [
    {
    groupId: 4567,
    groupLabel: "Week 1",
    date: "Wednesday, January 15",
    games: [
      {
        gameID: "1234",
        location: "Concord Sports Center, Concord NH",
        time: "7:00pm",
        homeTeam: "My Team",
        homeTeamScore: "100",
        awayTeam: "Your Team",
        awayTeamScore: "50"
      }
    ]},
    {
      groupId: 1234,
      groupLabel: "Week 2",
      date: "Wednesday, March 15",
      games: [
        {
          gameID: "4567",
          location: "Concord Sports Center, Concord NH",
          time: "7:00pm",
          homeTeam: "Butt Team",
          homeTeamScore: "90",
          awayTeam: "Boob Team",
          awayTeamScore: "40"
        },
        {
          gameID: "9635",
          location: "Concord Sports Center, Concord NH",
          time: "8:00pm",
          homeTeam: "Arm Team",
          homeTeamScore: "",
          awayTeam: "Leg Team",
          awayTeamScore: ""
        }
      ]}
  ]
}

const teamOptions = [
  {
    teamId: "1234",
    name: "PoundTown"
  },
  {
    teamId: "4567",
    name: "Monstars"
  },
  {
    teamId: "7412",
    name: "PiffSquad"
  }
]

const Schedule = ({match}) => {
  const context = useContext(StateContext);
  const sessionId = match.params.id;
  const sessions = context.state.leagueContext.leagues;
  const session = sessions.find(obj => obj.sessionId === sessionId) ? leagues.find(obj => obj.sessionId === sessionId) : {};
  // const teams = session.sessionTeams ? session.sessionTeams : [];
  // const scheduleGroups = session.schedule.scheduleGroups;
  const scheduleGroups = scheduleObject.scheduleGroups;

  //Spread existing group forms & set initial count
  const [groupForm, setGroupForm] = useState({
    edit: true,
    groupCount: 0,
    
  });

  return (
    <DisplayCard width="600" bcolor="F5F5F5" border="5px solid white" direction="column">
      <Wrapper direction="column" align="center" width="100%">
        <Wrapper>
          <StyledTitle>{session.sessionFriendlyName} Schedule</StyledTitle>
          <StyledButton>Create Schedule Group</StyledButton>
        </Wrapper>
          { 
            scheduleGroups.map(group => (
              <ScheduleGroup scheduleGroup={group} />
            ))
          }
          <StyledButton>Save</StyledButton>
      </Wrapper>
    </DisplayCard>
  )
}

export default Schedule;