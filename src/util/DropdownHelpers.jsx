import React, { useContext, useState, useEffect } from 'react'
import { 
  StandardDropDown,
  CreateDropDown
} from "../components"
import {
  getPlayersByTeam,
  getPlayersBySession
} from "../util/helpers.js"
import {
  createTeam
} from "../service/Database"
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

export const TeamStandardDropDown = ({
  sessionId,
  updateFunction,
  value,
  props,
  styles
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
      value= {value}
      styles={styles}
      props={props ? props : null}
      options={generateOptions()} 
      updateFunction={updateFunction} 
    />
  )
}

//Work in Prgoress
export const TeamCreateDropDown = ({
  label,
  placeholder,
  width,
  value,
  formKey,
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
  const options = generateOptions();
  
  const handleCreate = entry => {
    console.log("Entry", entry)
    const newTeam = {
      name: entry,
      captain: "",
      stats: []
    }
    createTeam(sessionId, newTeam, context).then(id => {
      console.log("Create team is kicked off", id)
      const newOption = {
        label: entry,
        value: id
      };
      console.log("New option: ", newOption)
      options.push(newOption);

      updateFunction(newOption, formKey);
    })
  }

  console.log("Teams Array on render", options)

  return (
    <CreateDropDown
      styles={{width: width ? width : "300"}}
      props={{
        isSearchable: true,
        label: label || label === "" ? label : "Team",
        placeholder: placeholder ? placeholder : "Choose Team",
        noOptionMessage: () => "No Teams Found"
      }}
      value= {value ? value : null}
      options={options} 
      updateFunction={updateFunction}
      // onCreateOption={handleCreate}
      onCreateOption={() => handleCreate()}
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