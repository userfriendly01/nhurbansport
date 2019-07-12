import React, { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import Accordion from '../components/Accordian.jsx'
import { getSports, getSport } from '../service/Sport.jsx'
import { getAllTeamsForSport } from '../service/Team.jsx'
import { getActiveSessions, getSessions } from '../service/Session.jsx'

  const Roster = () => {
        
    const [ sports, setSports ] = useState([]);
    const [ activeSessions, setActiveSessions ] = useState([]);
    const [ teams, setTeams ] = useState({});
    const [ players, setPlayers ] = useState(["Player 1", "Player 2", "Player 3"]);
    
    const filterSessions = () => {
      //update this to be an object of the Session Start Date and Sport Name
      getActiveSessions().then((sessions) => {
        let sessionsArray = [];
        for(var s in sessions){
          //get the startDate and Sport Id => date for each session
          let startDate = sessions[s].startDate;
          let sportFriendlyName;
          getSport(sessions[s].sportKey).then((sport) => {
            for(var x in sport){
              sportFriendlyName = sport[x].sportName
            }
            sessionsArray.push(sportFriendlyName + " " + startDate)
          })
        }
        setActiveSessions(sessionsArray);
      })
      
      getSports().then((sports) => {
        let sportNames = [];
        for(var s in sports){
          sportNames.push(sports[s].sportName);
        }
        setSports(sportNames);
        console.log(sports)
      });
    }

    const filterTeams = () => {
      //For each sport, find the listed team names and add the sport:teams array to the overall teams object
      let teamsArrayBySport = {};
      getSports().then((sports) => {
        for(var s in sports) {
          const sportName = sports[s].sportName;
          getAllTeamsForSport(s).then((teams) => {
            teamsArrayBySport[sportName] = teams;
          })
        }
        console.log(teamsArrayBySport)
      })
    }

    const filterPlayers = () => {
    }


    useEffect(() => {
      filterSessions();
      filterTeams();
      filterPlayers();
    }, []);

    return (
        <Container direction="column" width="70%" margin="0 auto">
            <h1>Roster!</h1>
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