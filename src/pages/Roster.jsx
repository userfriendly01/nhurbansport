import React, { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import Accordion from '../components/Accordian.jsx'
import { returnSessionValues } from '../service/Session.jsx'

  const Roster = () => {
    const values = returnSessionValues();
    const activeSessions = values.activeSessions;
    console.log(activeSessions)

  return (
          <Container direction="column" width="70%" margin="0 auto">
              <h1>Roster!</h1>
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
                                expand={!index}
                                content= {
                                  team.players.map((player, index) => (
                                  <div key={`player${index}`}>
                                    <p>{player}</p>
                                  </div>
                                  ))  
                                }   
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