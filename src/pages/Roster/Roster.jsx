import React, { useContext, useState } from 'react'
import {
  Accordion,
  Image,
  StandardDropDown,
  Wrapper
} from '../../components'
import { 
  CreateTeam,
  EditTeam,
  DeleteTeam
} from './TeamForm.jsx'
import { StateContext } from '../../context/appContext.jsx'
import { getPlayersByTeam } from '../../util/Helpers.jsx';

  const Roster = () => {
    const context = useContext(StateContext);
    const roster = context.state.leagueContext.leagues;
    const players = context.state.playerContext.players
    const [ optionSelected, setOptionSelected ] = useState(false);
    const rosterOptions = [
      {
        label: "Create New Team",
        value: "create-team"
      },
      {
        label: "Edit Team",
        value: "edit-team"
      },
      {
        label: "Delete Team",
        value: "delete-team"
      },
      {
        label: "View All Teams",
        value: "view-teams"
      },
      {
        label: "Add Player to Team",
        value: "add-player"
      },
      {
        label: "Create Player",
        value: "create-player"
      },
      {
        label: "Edit Player",
        value: "edit-player"
      },
      {
        label: "Delete Player",
        value: "delete-player"
      },
      {
        label: "View All Players",
        value: "view-players"
      }
    ]

  const showAdminPane = () => {
    switch (optionSelected) {
      case "create-team":
        return <CreateTeam />
      case "edit-team":
        return <EditTeam sessions={roster}/>;
      case "delete-team":
        return <DeleteTeam sessions={roster} />;
      case "view-teams":
        return <div>View Teams Div</div>;
      case "add-player":
        return <div>Add Player to Team Div</div>;
      case "create-player":
        return <div>Create Player Div</div>;
      case "edit-player":
        return <div>Edit Player Div</div>;
      case "delete-player":
        return <div>Detete Player Div</div>;
      case "view-players":
        return <div>View Players</div>;
      default:
        return null
    }
  }

  return (
          <Wrapper direction="column" width="600" margin="0 auto" align="center">
              <Wrapper>
                <Image id="Roster Banner"
                  width="650"
                  height="200" />
            </Wrapper>
            <Wrapper direction="column" align="center">
              <Wrapper margin="15 0 0 0"> 
                <StandardDropDown props={{
                    isSearchable: false,
                    label: "Admin Actions",
                    placeholder: "Select Admin Action"
                  }}
                  styles={{width: "300"}}
                  options={rosterOptions} 
                  updateFunction={selection => {setOptionSelected(selection.value)}} />
              </Wrapper>
              <Wrapper width="600">
              {showAdminPane()}
              </Wrapper>
            </Wrapper>
            <dl className="accordion">
                {
                  roster.map((session, index) => (
                    <div key={`sport${index}`}>
                      <Accordion width="600"
                        title={session.sessionFriendlyName} 
                        expand={!index}
                        content= {
                          session.teams.map((team, index) => (
                            <div key={`team${index}`}>
                              <Accordion 
                                title={team.name} 
                                expand={false}
                                content= {
                                  getPlayersByTeam(players, team.teamId).map((player, index) => (
                                  <Wrapper direction="column" key={`player${index}`}>
                                    <Wrapper>
                                      <div>{player.firstName} {player.lastName}</div>
                                    </Wrapper>
                                  </Wrapper>
                                  ))  
                                }
                                bcolor="white"
                                color="black"
                                scolor="#26a3d9"
                              />
                            </div>
                          ))  
                        }
                      />
                    </div>
                  ))
                }
              </dl>
          </Wrapper>
      );
  };


export default Roster;