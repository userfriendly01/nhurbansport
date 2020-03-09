//update form
//return counter with no dups
import React, { useContext } from 'react'
import { 
  StandardDropDown
} from "../components"
import {
  getPlayersByTeam,
  getPlayersBySession
} from "../util/Helpers.jsx"
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
      styles={{width:"300"}}
      props={{
        isSearchable: true,
        label:"Session",
        placeholder: "Choose Session",
        noOptionMessage: () => "No Sessions Found"
      }}
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
      styles={{width:"300"}}
      props={{
        isSearchable: true,
        label:"Team",
        placeholder: "Choose Team",
        noOptionMessage: () => "No Teams Found"
      }}
      options={generateOptions()} 
      updateFunction={updateFunction} 
    />
  )
}

export const PlayerDropDown = ({
  label,
  sessionId,
  teamId,
  updateFunction
}) => {

  const context = useContext(StateContext);
  const players = context.state.playerContext.players;

  console.log("Quick Check: ", teamId);
  console.log("Quick Check: ", players);
  
  const generateOptions = () => {
    let filteredPlayers = [];
    if(teamId) {
      filteredPlayers = getPlayersByTeam(players, teamId)
    } else if(sessionId) {
      filteredPlayers = getPlayersBySession(players, sessionId)
    } else {
      filteredPlayers = players;
    }
    const playersArray = [];
    filteredPlayers.map(player => {
      const optionObject = {
        label: player.firstName + " " + player.lastName,
        value: player.playerId
      }
      playersArray.push(optionObject);
    })
    return playersArray;
  }

  return (
    <StandardDropDown
      styles={{width:"300"}}
      props={{
        isSearchable: true,
        label: label ? label : "Players",
        placeholder: "Choose Player",
        noOptionMessage: () => "No Players Found"
      }}
      options={generateOptions()} 
      updateFunction={updateFunction} 
    />
  )
}