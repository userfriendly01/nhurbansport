import React from "react"
import {
  CreateDropDown,
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

const ScheduleGroup = props => {
  const game = props.game ? props.game : false;
  const homeTeam = game.homeTeam ? game.homeTeam : null;
  const homeTeamScore = game.homeTeamScore ? game.homeTeamScore : null;
  const awayTeam = game.awayTeam ? game.awayTeam : null;
  const awayTeamScore = game.awayTeamScore ? game.awayTeamScore : null;
  const gameTime = game.time ? game.time : null;
  const gameLocation = game.location ? game.location : null;

  const edit = props.edit ? props.edit : false;
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
  //Check if Game existes

  return (
    <>
    { edit ?
      <>
        <StyledLocationRow>
            <div>{gameLocation}</div>
            <div>{gameTime}</div>
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