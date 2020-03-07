import React from "react"
import {
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
`

const StyledDateRow = styled(Wrapper)`
  width: 100%;
  padding: 5;
  background-color: #555555;
  color: white;
`
const ScheduleGroup = props => {
  const scheduleGroup = props.scheduleGroup;
  const groupLabel = scheduleGroup.groupLabel ? scheduleGroup.groupLabel : "";
  const groupDate = scheduleGroup.date ? scheduleGroup.date : "";
  const games = scheduleGroup.games ? scheduleGroup.games : [];
  const groupForm = props.edit ? props.edit : { edit: true, group: "PlaceHolderLabel" };

  return (
    <>
    {groupForm.edit ?
      <StyledDisplay>
        <StyledGroupRow>
          <TextField 
            id="group"
            form={groupForm}
            setForm={() => console.log("Form is Set")}
          />
        </StyledGroupRow>
        <StyledDateRow>{groupDate}</StyledDateRow>
        {
          games.map(game => (
            <Game game={game} edit={groupForm.edit}/>
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