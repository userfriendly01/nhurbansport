import React from 'react'
import Container from '../components/Container.jsx'
import Image from '../components/Image.jsx'
import Accordion from '../components/Accordian.jsx'
import { returnSessionValues } from '../service/Session.jsx'
import { images } from '../util/Constants.jsx'

  const Roster = () => {
    const values = returnSessionValues();
    const activeSessions = values.activeSessions;
    console.log(activeSessions)

  return (
          <Container direction="column" width="70%" margin="0 auto">
<           Container>
              <Image url={images.ROSTER.BANNER}
                       width="650"
                       height="200">
                </Image>
            </Container>              
            <dl className="accordion">
                {
                  activeSessions.map((session, index) => (
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