import React from "react"
import {
  CreateDropDown,
  DeleteIcon,
  TextField,
  Wrapper
} from "../../components"
import styled from 'styled-components'

const StyledLocationRow = styled(Wrapper)`
  width: 100%;
  padding: 1%;
  font-size: 11;
  background-color: #F5F5F5;
`

const StyledGameRow = styled(Wrapper)`
  width: 100%;
  font-size: 15;
  padding: 5;
  background-color: ${props => props.bcolor}
`
const StyledInput = styled.input`
  width: 45;
  margin: 15 5;
`
//Custom Styling for winner

const ScheduleGroup = ({
  groupIndex,
  gameId,
  edit,
  form,
  resetFunction
}) => {
  const groups = form.scheduleGroups;
  const group = groups[groupIndex] ? groups[groupIndex] : {};
  const games = group.games;
  const game = games.find(obj => obj.gameId === gameId) ? games.find(obj => obj.gameId === gameId) : {};
  const gameIndex = games.map(deletedGame => { return deletedGame.gameId; }).indexOf(gameId);

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

  const resetGame = newGame => {
    deleteGame();
    games.splice(gameIndex, 0, newGame);
    const newGroup = {
      ...group,
      games: games
    }
    resetFunction(newGroup);
  }
  
  const deleteGame = () => {
    games.splice(gameIndex, 1);
    const newGroup = {
      ...group,
      games: games
    }
    resetFunction(newGroup);
  };

  const handleFormEntry = (selection, id) => {
    const key = id;
    const value = selection;
    const newGame = {
      ...game,
    }
    newGame[key] = value;
    resetGame(newGame);
  }

  return (
    <>
    { edit ?
      <>
        <Wrapper justify="flex-end" padding="5 0 0 0">
          <DeleteIcon size="16" deleteFunction={deleteGame}/>
        </Wrapper>
        <StyledLocationRow>
          <TextField 
              id="location"
              value={game.location}
              placeholder="Game Location"
              margin="none"
              customOnChangeFunction={e => {handleFormEntry(e.target.value, "location")}}
            />
          <TextField 
            id="time"
            value={game.time}
            placeholder="Game Time"
            margin="none"
            customOnChangeFunction={e => {handleFormEntry(e.target.value, "time")}}
            />
        </StyledLocationRow>
        <StyledGameRow>
        <CreateDropDown 
            width="180"
            placeholder="Home Team"
            value={game.homeTeam}
            options={teamOptions}
            optionLabelKey="name"
            optionValueKey="teamId"
            customOnChangeFunction={selection => {handleFormEntry(selection, "homeTeam")}}  
            addNewFunction={selection => {handleFormEntry(selection, "homeTeam")}} 
          />
          
          <div>
            <StyledInput onChange={e => {handleFormEntry(e.target.value, "homeTeamScore")}} 
              type="number" 
              id="homeTeamScore" 
              name="homeTeamScore" 
              min="0" />
            : 
            <StyledInput onChange={e => {handleFormEntry(e.target.value, "awayTeamScore")}} 
              type="number" 
              id="awayTeamScore" 
              name="awayTeamScore" 
              min="0" />
          </div>
          <CreateDropDown 
            width="180"
            placeholder="Away Team"
            value={game.awayTeam}
            options={teamOptions}
            optionLabelKey="name"
            optionValueKey="teamId"
            customOnChangeFunction={selection => {handleFormEntry(selection, "awayTeam")}} 
            addNewFunction={selection => {handleFormEntry(selection, "awayTeam")}} 
          />
        </StyledGameRow>
      </>
      :
      <>
        <StyledLocationRow>
            <div>{gameLocation}</div>
            <div>{gameTime}</div>
        </StyledLocationRow>
        <StyledGameRow>
          <div>{homeTeam}</div>
          <div>{homeTeamScore} : {awayTeamScore}</div>
          <div>{awayTeam}</div>
        </StyledGameRow>
      </>
    }
    </>
  )
}

export default ScheduleGroup;