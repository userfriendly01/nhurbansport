import React, { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import Accordion from '../components/Accordian.jsx'
import { getSportNameArray, getSports } from '../service/Sport.jsx'



  const Roster = () => {
        
    const [ sportsList, setSportsList ] = useState([]);
    const [ teamList, setTeamList ] = useState({
      sport: ["Team 1", "Team 2", "Team 3"],

    }
    );
    const [ playerList, setPlayersList ] = useState(["Player 1", "Player 2", "Player 3"]);


    
    const filterSports = () => {
      getSports().then((sports) => {
        let sportNames = [];
        for(var s in sports){
          sportNames.push(sports[s].SportName);
        }
        setSportsList(sportNames);
      });
    }

    const filterTeams = () => {
      //For each sport, find the listed team names and add the sport:teams array to the overall teams object
      
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
                sportsList.map((item, index) => (
                  <div key={`sport${index}`}>
                    <Accordion 
                      title={item} 
                      expand={!index}
                      content= {
                        teamList.map((item, index) => (
                          <div>
                            <Accordion 
                              title={item} 
                              expand={!index}
                              content= {
                                playerList.map((item, index) => (
                                <div>
                                  <p>{item}</p>
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