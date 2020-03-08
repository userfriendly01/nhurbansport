//update form
//return counter with no dups
import React, { useContext } from 'react'
import { 
  StandardDropDown
} from "../components"
import { StateContext } from '../context/appContext.jsx'

export const SessionDropDown = ({
  updateFunction
}) => {
  const context = useContext(StateContext);
  const sessions = context.state.leagueContext.leagues;

  const generateOptions = () => {
    const sessionsArray = [];
    sessions.map(session => {
      const optionObject = {
        label: session.name,
        value: session.sessionId
      }
      sessionsArray.push(optionObject);
    })
    return sessionsArray;
  }

  return (
    <StandardDropDown
      isSearchable={false} 
      width="300"
      label={"label"}
      value={"value"}
      placeholder="Choose Session"
      noOptionMessage={"No Sessions Found"}
      options={generateOptions()} 
      updateFunction={updateFunction} 
    />
  )
}

export const TeamDropDown = ({
  sessionId,
  updateFunction
}) => {
  const context = useContext(StateContext);
  const sessions = context.state.leagueContext.leagues;
  const session = sessions.find(obj => obj.sessionId === sessionId) ? sessions.find(obj => obj.sessionId === sessionId) : {};
  const teams = session.teams ? session.teams : [];

  const generateOptions = () => {
    const teamsArray = [];
    teams.map(team => {
      const optionObject = {
        label: team.name,
        value: team.teamId
      }
      teamsArray.push(optionObject);
    })
    return teamsArray;
  }

  return (
    <StandardDropDown
      isSearchable={false} 
      width="300"
      label={"label"}
      value={"value"}
      placeholder="Choose Team"
      noOptionMessage={"No Teams Found"}
      options={generateOptions()} 
      updateFunction={updateFunction} 
    />
  )
}

export const PlayerDropDown = ({
  sessionId,
  teamId,
  updateFunction
}) => {
  //If session Id is passed in filter for getPlayersBySession
  //If team Id is passed in, filter for getPlayersByTeam

  const context = useContext(StateContext);
  const players = context.state.playerContext.players;
  
  const generateOptions = () => {
    const playersArray = [];
    players.map(player => {
      const optionObject = {
        label: player.firstName + player.lastName,
        value: player.playerId
      }
      teamsArray.push(optionObject);
    })
    return teamsArray;
  }

  return (
    <StandardDropDown
      isSearchable={true} 
      width="300"
      label={"label"}
      value={"value"}
      placeholder="Choose Team"
      noOptionMessage={"No Teams Found"}
      options={generateOptions()} 
      updateFunction={updateFunction} 
    />
  )
}