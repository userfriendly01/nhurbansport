import React, { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import Accordion from '../components/Accordian.jsx'
import { getSportNameArray, getSports } from '../service/Sport.jsx'

//Get all of the teams and the players on them. First and Last Name
//const players = getTeams();

  const Roster = () => {
        //setState({ [`block${index}`]: !this.state[`block${index}`] });
        
    const [ list, setList ] = useState([]);
    
    useEffect(() => {
      getSports().then((sports) => {
        let sportNames = [];
        for(var s in sports){
            sportNames.push(sports[s].SportName);
          }
          setList(sportNames);
          console.log(sportNames);
      });
    });
    return (
        <Container direction="column" width="70%" margin="0 auto">
            <h1>Roster!</h1>
            <dl className="accordion">
              {
                list.map((item, index) => (
                  <div>
                  <Accordion 
                    title={item} 
                    expand={!index}
                    content= {
                      <div>
                        <Accordion title="PoundTown!" expand="false" content="I'm all the PoundTown players!"/>
                        <Accordion title="Monstars!" expand="false" content="I'm all the Monstar players!"/>
                      </div>
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