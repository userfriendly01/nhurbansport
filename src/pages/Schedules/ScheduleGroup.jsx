import React, { useState } from "react"
import {
  DayPicker,
  DisplayCard,
  TextField,
  Wrapper
} from "../../components"
import Game from "./Game.jsx"
import styled from 'styled-components'

const StyledDisplay = styled(DisplayCard)`
  width: 95%;
  flex-direction: column;
  margin: 1% 0 2% 0; 
  padding: 0;
  border: 2px solid #c3c3a2;
`

const StyledGroupRow = styled(Wrapper)`
  width: 100%;
  padding: 10 5;
  font-size: 25;
  font-weight: bold;
  align-items: baseline;
`

const StyledDateRow = styled(Wrapper)`
  width: 100%;
  padding: 5;
  background-color: #555555;
  color: ${props => props.color ? props.color : "white"};
`

const StyledButton = styled.button`
  margin: 0 15;
  width: 80;
  height: 30;
  font-size: 13;
`

const ScheduleGroup = ({
  groupId,
  edit,
  form,
  setForm
}) => {
  const groupCount = form.scheduleGroups.length ? form.scheduleGroups.length : 0;
  const group = form.scheduleGroups.find(obj => obj.groupId === groupId) ? form.scheduleGroups.find(obj => obj.groupId === groupId) : { groupId: form.scheduleId + "G" + groupCount };
  const groupLabel = group.groupLabel ? group.groupLabel : "";
  const groupDate = group.date ? group.date : "";
  const games = group.games ? group.games : [];
  console.log(group);

  const [groupForm, setGroupForm] = useState();

const updateGroupsArray = () => {
  //check for groupId in sessionGroups
  sessions.find(obj => obj.sessionId === sessionId)

}

  const handleSomething = () => {
    setForm({
      ...form,
      sessionGroups: [
        ...form.sessionGroups,

      ]
    })
  }
  return (
    <>
    {edit ?
      <StyledDisplay>
        <StyledGroupRow>
          <TextField 
            id="groupLabel"
            form={group}
            setForm={() => console.log("Form is Set")}
          />
          <StyledButton>Add game</StyledButton>
        </StyledGroupRow>
        <StyledDateRow color="black">
          <DayPicker
            id="date" 
            form={group}
            setForm={() => console.log("Form is Set")}
          />
        </StyledDateRow>
        {
          games.map(game => (
            <Game game={game} edit={edit}/>
          ))
        }
      </StyledDisplay>
      :
      <StyledDisplay>
      <StyledGroupRow>{groupLabel}</StyledGroupRow>
      <StyledDateRow>{groupDate}</StyledDateRow>
      {
        games.map(game => (
          <Game game={game}/>
        ))
      }
    </StyledDisplay>
    }
    </>
  )
}

export default ScheduleGroup;