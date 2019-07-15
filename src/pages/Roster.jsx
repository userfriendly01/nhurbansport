import React, { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import Accordion from '../components/Accordian.jsx'
import { getSports, getSport, getSportName } from '../service/Sport.jsx'
import { getAllTeamsForSport } from '../service/Team.jsx'
import { returnSessionValues, getSessions, filterSessions, getActiveSessions } from '../service/Session.jsx'

  const Roster = () => {
    const values = returnSessionValues();
    const activeSessions = values.activeSessionFriendlyNames;

  return (
          <Container direction="column" width="70%" margin="0 auto">
              <h1>Roster!</h1>
              <p>{activeSessions}</p>
              <dl className="accordion">
                {
                  activeSessions.map((item, index) => (
                    <div key={`sport${index}`}>
                      <Accordion 
                        title={item} 
                        expand={!index}
                        //content= {
                          // sportsList.map((item, index) => (
                          //   <div>
                          //     <Accordion 
                          //       title={item} 
                          //       expand={!index}
                          //       content= {
                          //         sportsList.map((item, index) => (
                          //         <div>
                          //           <p>{item}</p>
                          //         </div>
                          //         ))  
                          //       }   
                          //     />
                          //   </div>
                          // ))  
                        //}
                      />
                    </div>
                  ))
                }
              </dl>
          </Container>
      );
  };


export default Roster;