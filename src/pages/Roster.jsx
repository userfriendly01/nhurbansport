import React, { useState } from 'react'
import Container from '../components/Container.jsx'
import Accordion from '../components/Accordian.jsx'
import { getSportNameArray, getSports, getKeyArray } from '../service/Sport.jsx'

//Get all of the teams and the players on them. First and Last Name
//const players = getTeams();

  const Roster = () => {
        //setState({ [`block${index}`]: !this.state[`block${index}`] });

        const sportArray = getSportNameArray();
        const sports = getSports();
        const keys = getKeyArray();
       

    return (
        <Container direction="column" width="70%" margin="0 auto">
            <h1>Roster!</h1>
            <p>{"I'm the variable you're supposed to see!" + sportArray}</p>
            <p>{"I'm the variable you're supposed to see!" + sports}</p>
            <p>{"I'm the variable you're supposed to see!" + keys}</p>
            <dl className="accordion">
              {
                sportArray.map((item, index) => (
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