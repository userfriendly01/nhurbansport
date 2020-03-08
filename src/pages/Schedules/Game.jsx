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
  groupId,
  gameId,
  edit,
  form,
  setForm,
  deleteGroupFunction
}) => {
  const groups = form.scheduleGroups;
  const group = groups.find(obj => obj.groupId === groupId) ? groups.find(obj => obj.groupId === groupId) : {};
  const games = group.games;
  console.group()
  console.log("First lets see game groups", groups)
  console.log("First lets see game groupId", groupId)
  console.log("First lets see game group", group)
  console.groupEnd()
  const game = games.find(obj => obj.gameId === gameId) ? games.find(obj => obj.gameId === gameId) : {};
  
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

  const deleteGame = () => {
    const gameArray = games;
    const gameIndex = gameArray.map(deletedGame => { return deletedGame.gameId; }).indexOf(gameId);
    gameArray.splice(gameIndex, 1);

    const newGroup = {
      ...group,
      games: gameArray
    }
    const groupIndex = deleteGroupFunction(groupId);
    const groups = form.scheduleGroups;
    groups.splice(groupIndex, 0, newGroup);

    setForm({
      ...form,
      scheduleGroups: groups
    })
  };

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
              margin="none"
              form={game}
              setForm={() => console.log("Form is Set")}
            />
          <TextField 
            id="time"
            margin="none"
            form={game}
            setForm={() => console.log("Form is Set")}
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