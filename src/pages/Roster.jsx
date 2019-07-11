import React, { useState } from 'react'
import Container from '../components/Container.jsx'
import Accordion from '../components/Accordian.jsx'
//import { getTeams } from '../service/Team.jsx'

//Get all of the teams and the players on them. First and Last Name
//const players = getTeams();

  const Roster = () => {
        //setState({ [`block${index}`]: !this.state[`block${index}`] });

        const sportList = [{ title: 'Flag Football' }, { title: 'Basketball' }, { title: 'Cornhole' }];

    return (
        <Container direction="column" width="70%" margin="0 auto">
            <h1>Roster!</h1>
            <dl className="accordion">
              {
                sportList.map((item, index) => (
                  <div>
                  <p>{index}</p>
                  <Accordion 
                    title={item.title} 
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