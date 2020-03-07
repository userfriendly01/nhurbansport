import React from "react"
import {
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
//Custom Styling for winner

const ScheduleGroup = props => {
  const game = props.game;
  const homeTeam = game.homeTeam ? game.homeTeam : null;
  const homeTeamScore = game.homeTeamScore ? game.homeTeamScore : null;
  const awayTeam = game.awayTeam ? game.awayTeam : null;
  const awayTeamScore = game.awayTeamScore ? game.awayTeamScore : null;
  const gameTime = game.time ? game.time : null;
  const gameLocation = game.location ? game.location : null;


  return (
    <div>
      <StyledLocationRow>
          <div>{gameLocation}</div>
          <div>{gameTime}</div>
      </StyledLocationRow>
      <StyledGameRow>
        <div>{homeTeam}</div>
        <div>{homeTeamScore} : {awayTeamScore}</div>
        <div>{awayTeam}</div>
      </StyledGameRow>
    </div>
  )
}

export default ScheduleGroup;