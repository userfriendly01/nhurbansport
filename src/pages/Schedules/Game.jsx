import React, { useContext, useState } from "react"
import {
  DeleteIcon,
  TextField,
  Wrapper
} from "../../components"
import { TeamStandardDropDown } from "../../util/DropdownHelpers.jsx"
import styled from 'styled-components'
import { deleteGame } from "../../service/Database"
import { StateContext } from '../../context/appContext.jsx'

const StyledLocationRow = styled(Wrapper)`
  width: 100%;
  padding: 1%;
  font-size: 11;
  background-color: #F5F5F5;
`

const StyledGameRow = styled(Wrapper)`
  justify-content: space-around;
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

const Game = ({
  groupIndex,
  sessionId,
  gameId,
  edit,
  form,
  resetFunction
}) => {
  const context = useContext(StateContext);
  const groups = form.groups;
  const group = groups[groupIndex] ? groups[groupIndex] : {};
  const games = group.games;
  const game = games.find(obj => obj.gameId === gameId) ? games.find(obj => obj.gameId === gameId) : {};
  const [ gameForm, setGameForm ] = useState(game);
  const gameIndex = games.map(game => { return game.gameId; }).indexOf(gameId);
  
  const handleDeleteGame = () => {
    deleteGame(sessionId, group.groupId, gameId, context)
  };

  const handleFormEntry = (selection, id) => {
    const newGame = {
      ...game,
      [id]: selection
    }
    const gamesArray = games;
    gamesArray.splice(gameIndex, 1);
    gamesArray.splice(gameIndex, 0, newGame);
    const newGroup = {
      ...group,
      gamesArray
    }
    groups.splice(groupIndex, 1);
    groups.splice(groupIndex, 0, newGroup);
    resetFunction({
      ...form,
      groups
    })
  }

  console.log("Game on Render", game)

  return (
    <>
    { edit ?
      <>
        <Wrapper justify="flex-end" padding="5 0 0 0">
          <DeleteIcon size="16" deleteFunction={handleDeleteGame}/>
        </Wrapper>
        <StyledLocationRow>
          <TextField 
              id="location"
              value={game.location}
              placeholder="Game Location"
              margin="none"
              customOnChangeFunction={e => handleFormEntry(e.target.value, "location")}
            />
          <TextField 
            id="time"
            value={game.time}
            placeholder="Game Time"
            margin="none"
            customOnChangeFunction={e => handleFormEntry(e.target.value, "time")}
            />
        </StyledLocationRow>
        <StyledGameRow>
          <TeamStandardDropDown 
            styles={{width:"180"}}
            sessionId={sessionId}
            value={game.homeTeam}
            props={{
              label:"",
              placeholder:"Home Team"
            }}
            updateFunction={selection => handleFormEntry(selection, "homeTeam")}/>
          <div>
            <StyledInput onChange={e => handleFormEntry(e.target.value, "homeTeamScore")} 
              value={game.homeTeamScore}
              type="number" 
              id="homeTeamScore" 
              name="homeTeamScore" 
              min="0" />
            : 
            <StyledInput onChange={e => handleFormEntry(e.target.value, "awayTeamScore")}
              value={game.awayTeamScore}
              type="number" 
              id="awayTeamScore" 
              name="awayTeamScore" 
              min="0" />
          </div>
          <TeamStandardDropDown 
            styles={{width: "180"}}
            sessionId={sessionId}
            value={game.awayTeam}
            label=""
            placeholder="Away Team"
            updateFunction={selection => handleFormEntry(selection, "awayTeam")}/>
        </StyledGameRow>
      </>
      :
      <>
        <StyledLocationRow>
            <div>{game.location}</div>
            <div>{game.time}</div>
        </StyledLocationRow>
        <StyledGameRow>
          <div>{game.homeTeam.label}</div>
          <div>{game.homeTeamScore} : {game.awayTeamScore}</div>
          <div>{game.awayTeam.label}</div>
        </StyledGameRow>
      </>
    }
    </>
  )
}

export default Game;