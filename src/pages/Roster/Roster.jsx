import React, { useContext } from 'react'
import {
  Accordion,
  Container,
  Image 
} from '../../components'
import { StateContext } from '../../context/appContext.jsx'
import { images } from '../../util/Constants.jsx'

  const Roster = () => {
    const context = useContext(StateContext);
    const roster = context.state.leagueContext.leagues;

  return (
          <Container direction="column" width="600" margin="0 auto">
<           Container>
              <Image url={images.ROSTER.BANNER}
                       width="650"
                       height="200">
                </Image>
            </Container>              
            <dl className="accordion">
                {
                  roster.map((session, index) => (
                    <div key={`sport${index}`}>
                      <Accordion 
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
          </Container>
      );
  };


export default Roster;