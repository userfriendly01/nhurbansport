import React, { useContext } from 'react'
import {
  Accordion,
  Image,
  Wrapper
} from '../../components'
import { StateContext } from '../../context/appContext.jsx'

  const Roster = () => {
    const context = useContext(StateContext);
    const roster = context.state.leagueContext.leagues;

  return (
          <Wrapper direction="column" width="600" margin="0 auto" align="center">
              <Wrapper>
                <Image id="Roster Banner"
                  width="650"
                  height="200" />
            </Wrapper>
            <dl className="accordion">
                {
                  roster.map((session, index) => (
                    <div key={`sport${index}`}>
                      <Accordion width="600"
                        title={session.sessionFriendlyName} 
                        expand={!index}
                        content= {
                          session.sessionTeams.map((team, index) => (
                            <div key={`team${index}`}>
                              <Accordion 
                                title={team.teamName} 
                                expand={false}
                                content= {
                                  team.players.map((player, index) => (
                                  <div key={`player${index}`}>
                                    <p>{player}</p>
                                  </div>
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