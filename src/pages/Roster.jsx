import React, { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import Accordion from '../components/Accordian.jsx'
import { getSports } from '../service/Sport.jsx'
import { getAllTeamsForSport } from '../service/Team.jsx'

  const Roster = () => {
        
    const [ sports, setSports ] = useState([]);
    const [ teams, setTeams ] = useState({});
    const [ players, setPlayers ] = useState(["Player 1", "Player 2", "Player 3"]);
    
    //Add logic to only display sports if they have active sessions

    const filterSports = () => {
      getSports().then((sports) => {
        let sportNames = [];
        for(var s in sports){
          sportNames.push(sports[s].sportName);
        }
        setSports(sportNames);
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
      filterSports();
      filterTeams();
      filterPlayers();
    }, []);

    return (
        <Container direction="column" width="70%" margin="0 auto">
            <h1>Roster!</h1>
            <dl className="accordion">
              {
                sports.map((item, index) => (
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