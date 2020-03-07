import React, { useContext } from "react"
import {
  DisplayCard,
  Wrapper
} from "../../components"
import ScheduleTemplate from "./ScheduleTemplate.jsx"
import ScheduleGroup from "./ScheduleGroup.jsx"
import styled from 'styled-components'
import { StateContext } from '../../context/appContext.jsx'

const StyledTitle = styled(Wrapper)`
  width: 600;
  color: #483d8b;
  padding: 1% 1% 1% 6%;
  font-weight: bold;
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
          location: "Concord Sports Center, Concord NH",
          time: "7:00pm",
          homeTeam: "Butt Team",
          homeTeamScore: "90",
          awayTeam: "Boob Team",
          awayTeamScore: "40"
        },
        {
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

const Schedule = ({match}) => {
  const context = useContext(StateContext);
  const sessionId = match.params.id;
  const sessions = context.state.leagueContext.leagues;
  const session = sessions.find(obj => obj.sessionId === sessionId) ? leagues.find(obj => obj.sessionId === sessionId) : {};
  // const scheduleGroups = session.schedule.scheduleGroups;
  const scheduleGroups = scheduleObject.scheduleGroups;

  return (
    <DisplayCard width="600" bcolor="F5F5F5" border="5px solid white">
      <Wrapper direction="column" align="center" width="100%">
        <StyledTitle>{session.sessionFriendlyName} Schedule</StyledTitle>
          { 
            scheduleGroups.map(group => (
              <ScheduleGroup scheduleGroup={group} />
            ))
          }
      </Wrapper>
    </DisplayCard>
  )
}

export default Schedule;