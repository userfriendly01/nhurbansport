import React, { useState } from "react"
import {
  DayPicker,
  DeleteIcon,
  TextField,
  DisplayCard,
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
  console.log("Schedule Group Form", form)
  const groups = form.scheduleGroups;
  const group = groups.find(obj => obj.groupId === groupId) ? groups.find(obj => obj.groupId === groupId) : {};
  const groupLabel = group.label ? group.label : "";
  const groupDate = group.date ? group.date : "";
  const games = group.games;
  const gameCount = group.games.length ? group.games.length : 0;
  const index = form.scheduleGroups.map(group => { return group.groupId; }).indexOf(groupId);

  const resetScheduleGroup = newGroup => {
    deleteScheduleGroup(groups, index)
    groups.splice(index, 0, newGroup);
    setForm({
      ...form,
      scheduleGroups: groups
    })
  }

  const deleteScheduleGroup = (groups, index) => {
    groups.splice(index, 1);
    setForm({
      ...form,
      scheduleGroups: groups
    })
    // return groupIndex;
  };

  const createGame = () => {
    const newGroup = {
      ...group,
      games: [
        ...group.games,
        { gameId: form.scheduleGroups[index].groupId + "GA" + gameCount,
          location: "",
          time: "",
          homeTeam: "",
          homeTeamScore: "",
          awayTeam: "",
          awayTeamScore: ""
      }
      ]
    }
    resetScheduleGroup(newGroup);
  };


  const handleTextChange = event => {
    const key = event.target.id;
    const value = event.target.value;
    const newGroup = {
      ...group,
    }
    newGroup[key] = value;
    resetScheduleGroup(newGroup);
  }

  const handleDateChange = date => {
    const key = "date";
    const value = date;
    const newGroup = {
      ...group,
    }
    newGroup[key] = value;
    resetScheduleGroup(newGroup);
  }

  return (
    <>
    {edit ?
      <StyledDisplay>
        <Wrapper justify="flex-end" padding="5 0 0 0">
          <DeleteIcon size="16" deleteFunction={resetScheduleGroup}/>
        </Wrapper>
        <StyledGroupRow>
          <TextField
            id="label"
            placeholder="Week"
            value={form.scheduleGroups[index].label}
            customOnChangeFunction={handleTextChange}
          />
          <StyledButton onClick={createGame}>Add game</StyledButton>
        </StyledGroupRow>
        <StyledDateRow color="black">
          <DayPicker
            value={form.scheduleGroups[index].date}
            customOnChangeFunction={handleDateChange}
          />
        </StyledDateRow>
        {
          games.map(game => (
            console.log(game.gameId),
            <Game 
              key={game.gameId}
              groupIndex={index}
              gameId={game.gameId}
              edit={edit} 
              form={form} 
              setForm={setForm}
              resetFunction={resetScheduleGroup}/>
          ))
        }
      </StyledDisplay>
      :
      <StyledDisplay>
      <StyledGroupRow>{groupLabel}</StyledGroupRow>
      <StyledDateRow>{groupDate}</StyledDateRow>
      {
        games.map(game => (
          <Game key={game.gameId} game={game}/>
        ))
      }
    </StyledDisplay>
    }
    </>
  )
}

export default ScheduleGroup;