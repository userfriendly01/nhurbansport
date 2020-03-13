import React, { useContext } from "react"
import {
  DayPicker,
  DeleteIcon,
  TextField,
  DisplayCard,
  Wrapper
} from "../../components"
import Game from "./Game.jsx"
import { 
  createGame,
  deleteScheduleGroup
} from "../../service/Database"
import styled from 'styled-components'
import dateFnsFormat from 'date-fns/format';
import { parse } from 'date-fns';
import { StateContext } from '../../context/appContext.jsx'


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

const formatDate = date => {
  const parseFormat = "E MMM dd yyyy"
  const formatOutput ="iiii, MMMM do";
  const dateObject = parse(date, parseFormat, new Date());
  return dateFnsFormat(dateObject, formatOutput);
}

const ScheduleGroup = ({
  sessionId,
  groupId,
  edit,
  form,
  setForm
}) => {
  const context = useContext(StateContext);
  const groups = form.groups;
  const group = groups.find(obj => obj.groupId === groupId) ? groups.find(obj => obj.groupId === groupId) : {};
  const groupLabel = group.label ? group.label : "";
  const groupDate = group.date ? formatDate(group.date) : "";
  const games = group.games;
  const gameTemplate = {
    location: "",
    time: "",
    homeTeam: "",
    homeTeamScore: "",
    awayTeam: "",
    awayTeamScore: ""
  }
  const index = form.groups.map(group => { return group.groupId; }).indexOf(groupId);

  const resetScheduleGroup = newGroup => {
    groups.splice(index, 1);
    groups.splice(index, 0, newGroup);
    setForm({
      ...form,
      groups
    })
  }

  const handleDeleteGroup = () => {
    deleteScheduleGroup(sessionId, groupId, context)
  };

  const handleCreateGame = () => {
    createGame(sessionId, groupId, gameTemplate, context)
  }

  const handleTextChange = event => {
    const newGroup = {
      ...group,
      label: event.target.value
    }
    resetScheduleGroup(newGroup);
  }

  const handleDateChange = date => {
    const newGroup = {
      ...group,
      date: date.toDateString()
    }
    resetScheduleGroup(newGroup);
  }

  return (
    <>
    {edit ?
      <StyledDisplay>
        <Wrapper justify="flex-end" padding="5 0 0 0">
          <DeleteIcon size="16" deleteFunction={handleDeleteGroup}/>
        </Wrapper>
        <StyledGroupRow>
          <TextField
            placeholder="Week"
            value={form.groups[index].label}
            customOnChangeFunction={handleTextChange}
          />
          <StyledButton onClick={handleCreateGame}>Add game</StyledButton>
        </StyledGroupRow>
        <StyledDateRow color="black">
          <DayPicker
            value={form.groups[index].date ? form.groups[index].date : null }
            onChangeFunction={handleDateChange}
          />
        </StyledDateRow>
        {
          games.map(game => (
            <Game 
              key={game.gameId}
              groupIndex={index}
              gameId={game.gameId}
              sessionId={sessionId}
              edit={edit} 
              form={form}
              resetFunction={setForm}/>
          ))
        }
      </StyledDisplay>
      :
      <StyledDisplay>
      <StyledGroupRow>{groupLabel}</StyledGroupRow>
      <StyledDateRow>{groupDate}</StyledDateRow>
      {
        games.map(game => (
          <Game key={game.gameId} gameId={game.gameId} game={game} form={form} groupIndex={index} />
        ))
      }
    </StyledDisplay>
    }
    </>
  )
}

export default ScheduleGroup;