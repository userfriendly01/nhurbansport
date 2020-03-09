import React, { useState } from 'react'
import {
  Button,
  DisplayCard,
  TextField,
  Wrapper
} from '../../components'
import {
  SessionDropDown,
  TeamDropDown,
  PlayerDropDown
} from "../../util/DropdownHelpers.jsx"
import {
  createTeam,
  updateTeam,
  deleteTeam
} from "../../service/Database"
import styled from "styled-components"

const TitleBar = styled(Wrapper)`
  background-color: grey;
  color: white;
  width: 101%;
  font-size: 20;
  align-items: center;
  justify-content: center;
`
const StyledText = styled(Wrapper)`
  font-size: 15;
`

export const CreateTeam = () => {
  const [ sessionId, setSessionId ] = useState(null);
  const [ team, setTeam ] = useState({
    name: "",
    captain: "",
    stats: []
  });

  const addTeam = () => {
    createTeam(sessionId, team).then(savedTeam => {
      console.log("Team Added: ", savedTeam)
      setSessionId(null);
      setTeam({
        name: "",
        captain: "",
        stats: []
      })
    })
  }

  const handleDropDown = selection => {
    setSessionId(selection.value);
  }

  return (      
    <DisplayCard margin="10" width="600" border="3px solid grey" align="center" padding="0">
      <Wrapper direction="column" width="100%" align="center">
        <SessionDropDown updateFunction={handleDropDown} />
        {sessionId ?
          <>      
          <TitleBar>Create Team</TitleBar>
          <TextField
            placeholder="Enter Team Name"
            customOnChangeFunction={e => {
              setTeam({
                ...team,
                name: e.target.value
              })
            }}
          />
          </>
          : null
        }
        {team.name ?
          <Button onClick={addTeam} align="center" width="100">Save</Button>
          : null
        }
      </Wrapper>
    </DisplayCard>

  )
}

export const EditTeam = ({
  sessions
}) => {
  const [ sessionId, setSessionId ] = useState(null);
  const [ team, setTeam ] = useState(null);

  const editTeam = () => {
    console.log("Team Edited!: ", team);
  }

  const handleSelectSession = selection => {
    setSessionId(selection.value)
  }

  const handleSelectTeam = selection => {
    const session = sessions.find(obj => obj.sessionId === sessionId);
    const selectedTeam = session.teams.find(obj => obj.teamId === selection.value);
    setTeam(selectedTeam)
  }

  const handleSelectCaptain = selection => {
    setTeam({
    ...team,
    captain: selection.value
    })
  }

  return (      
    <DisplayCard margin="10" width="600" border="3px solid grey" align="center" padding="0">
      <Wrapper direction="column" width="100%" align="center">
        <SessionDropDown updateFunction={handleSelectSession}/>
        {sessionId ?
          <TeamDropDown sessionId={sessionId} updateFunction={handleSelectTeam}/>
          :
          null
        }
        {team ?
        <>
          <TitleBar>Edit Team</TitleBar>
          <TextField
            placeholder="Enter Team Name"
            value={team.name}
            customOnChangeFunction={e => {
              setTeam({
                ...team,
                name: e.target.value
              })
            }}
          />
          <PlayerDropDown 
            updateFunction={handleSelectCaptain}
            label="Team Captain" 
            teamId={team.teamId}
            value={team.captain}
            />
          <Button onClick={editTeam} align="center" width="100">Save</Button>
        </>
          :
          null
        }
      </Wrapper>
    </DisplayCard>

  )
}

export const DeleteTeam = ({
  sessions
 }) => {
  const [ sessionId, setSessionId ] = useState(null);
  const [ team, setTeam ] = useState(null);


  const handleDelete = () => {
    deleteTeam(sessionId, team.teamId).then(() => {
      console.log("Team Deleted: ", team);
      setSessionId(null);
      setTeam(null)
    })
  }

  const handleSelectSession = selection => {
    setSessionId(selection.value)
  }
  
  const handleSelectTeam = selection => {
    const session = sessions.find(obj => obj.sessionId === sessionId);
    const selectedTeam = session.teams.find(obj => obj.teamId === selection.value);
    setTeam(selectedTeam)
  }
  return (      
    <DisplayCard margin="10" width="600" border="3px solid grey" align="center" padding="0">
      <Wrapper direction="column" width="100%" align="center">
        <SessionDropDown updateFunction={handleSelectSession}/>
        {sessionId ?
          <TeamDropDown sessionId={sessionId} updateFunction={handleSelectTeam} />
          : null
        }
        {team ?
          <>
            <TitleBar>Delete Team</TitleBar>
            {console.log("team", team)}
            <StyledText>Team Name: {team.name}</StyledText>
            <StyledText>Team Captain: {team.captain.name}</StyledText>
            <Button onClick={handleDelete} align="center" width="150" margin="5">Delete Team</Button>
          </>
          : null
        }
      </Wrapper>
    </DisplayCard>
  )
}
