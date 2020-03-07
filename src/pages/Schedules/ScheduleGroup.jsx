import React, { useState } from "react"
import {
  DayPicker,
  DeleteIcon,
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
  const groups = form.scheduleGroups;
  const group = groups.find(obj => obj.groupId === groupId) ? groups.find(obj => obj.groupId === groupId) : {};
  const groupLabel = group.groupLabel ? group.groupLabel : "";
  const groupDate = group.date ? group.date : "";
  const games = group.games;
  const gameCount = group.games.length ? group.games.length : 0;

  console.log("Show me the form", form);

  const createGame = () => {
    const newGroup = {
      ...group,
      games: [
        ...group.games,
        { gameId: form.scheduleGroups.groupId + "GA" + gameCount }
      ]
    }
    deleteScheduleGroup()
    setForm({
      ...form,
      scheduleGroups: [ 
        ...form.scheduleGroups,
        newGroup
      ]
    })
  };

  const deleteScheduleGroup = () => {
    const groupArray = form.scheduleGroups;
    const deleteIndex = groupArray.map(deletedGroup => { return deletedGroup.groupId; }).indexOf(groupId);
    groupArray.splice(deleteIndex, 1);
    setForm({
      ...form,
      scheduleGroups: groupArray
    })
  };

  return (
    <>
    {edit ?
      <StyledDisplay>
        <Wrapper justify="flex-end" padding="5 0 0 0">
          <DeleteIcon size="16" deleteFunction={deleteScheduleGroup}/>
        </Wrapper>
        <StyledGroupRow>
          <TextField 
            id="groupLabel"
            form={group}
            setForm={() => console.log("Form is Set")}
          />
          <StyledButton onClick={createGame}>Add game</StyledButton>
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
            <Game key={game.gameID} game={game} edit={edit} form={form} setForm={setForm}/>
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