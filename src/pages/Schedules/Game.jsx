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
  console.log("Did this work", group)
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

  const handleTextChange = event => {
    console.log("Game ID" , gameId);
    console.log("Games" , games);
    console.log("Game Form", form.scheduleGroups[groupIndex].games)
    console.log("Game Index", gameIndex)
    const key = event.target.id;
    const value = event.target.value;
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
              customOnChangeFunction={handleTextChange}
            />
          <TextField 
            id="time"
            value={game.time}
            placeholder="Game Time"
            margin="none"
            customOnChangeFunction={handleTextChange}
          />
        </StyledLocationRow>
        <StyledGameRow>
        <CreateDropDown 
          width="180"
          label="name"
          value="teamId"
          options={teamOptions} 
          updateFunction={()=> {console.log("Almost Done")}} />
          <div>
            <StyledInput type="number" id="homeTeam" name="homeTeam" min="0" />
            : 
            <StyledInput type="number" id="awayTeam" name="awayTeam" min="0" />
          </div>
          <CreateDropDown 
          width="180"
          label="name"
          value="teamId"
          options={teamOptions} 
          updateFunction={()=> {console.log("Almost Done")}} />
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