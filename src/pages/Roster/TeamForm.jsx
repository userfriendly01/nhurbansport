import React, { useState, useContext } from 'react'
import {
  Button,
  DisplayCard,
  TextField,
  Wrapper
} from '../../components'
import {
  SessionDropDown,
  TeamDropDown
} from "../../util/DropdownHelpers.jsx"
import { StateContext } from '../../context/appContext.jsx'

export const CreateTeam = () => {
  const [ team, setTeam ] = useState({
    name: "",
    sessionId: ""
  });

  const addTeam = () => {
    console.log("Team Added: ", team);
  }

  const handleDropDown = selection => {
    setTeam({
    ...team,
    sessionId: selection.value
    })
  }

  return (      
    <DisplayCard margin="10" width="600" border="3px solid grey" align="center">
      <Wrapper direction="column" width="100%" align="center">
        <SessionDropDown updateFunction={handleDropDown}/>
        <TextField
          placeholder="Enter Team Name"
          customOnChangeFunction={e => {
            setTeam({
              ...team,
              name: e.target.value
            })
          }}
        />
        <Button onClick={addTeam} align="center" width="100">Save</Button>
      </Wrapper>
    </DisplayCard>

  )
}

export const EditTeam = ({
  sessions
}) => {
  const [ team, setTeam ] = useState({
    name: "",
    team: null,
    sessionId: ""
  });

  const editTeam = () => {
    console.log("Team Edited!: ", team);
  }

  const handleSelectSession = selection => {
    setTeam({
    ...team,
    sessionId: selection.value
    })
  }

  const handleSelectTeam = selection => {
    const session = sessions.find(obj => obj.sessionId === team.sessionId);
    const selectedTeam = session.teams.find(obj => obj.teamId === selection.value);
    setTeam({
      ...team,
      team: selectedTeam
    })
  }

  return (      
    <DisplayCard margin="10" width="600" border="3px solid grey" align="center">
      <Wrapper direction="column" width="100%" align="center">
        <SessionDropDown updateFunction={handleSelectSession}/>
        {team.sessionId ?
          <TeamDropDown sessionId={team.sessionId} updateFunction={handleSelectTeam}/>
          :
          null
        }
        {team.team ?
        <>
          <TextField
            placeholder="Enter Team Name"
            value={team.team.name}
            customOnChangeFunction={e => {
              setTeam({
                ...team,
                team: {
                  ...team.team,
                  name: e.target.value
                }
              })
            }}
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
