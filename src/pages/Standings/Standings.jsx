import React, { useContext } from 'react'
import {
  Accordion,
  Image,
  Wrapper
} from '../../components'
import { Table } from 'reactstrap';
import { StateContext } from '../../context/appContext.jsx';

const Standings = () => {
    const context = useContext(StateContext);
    const sessions = context.state.leagueContext.leagues;

  return (
    <Wrapper direction="column" width="600" margin="0 auto" align="center">
      <Wrapper>
        <Image id="Standings Banner"
          width="650px"
          height="200px">
        </Image>
      </Wrapper>            
      <dl className="accordion">
        {
          sessions.map((session, index) => (
            <div key={`sport${index}`}>
              <Accordion 
                title={session.sessionFriendlyName} 
                expand={!index}
                content= {
                  <Table>
                    <thead>
                      <tr>
                          <th>Position</th>
                          <th>Team Name</th>
                          <th>P</th>
                          <th>W</th>
                          <th>L</th>
                          <th>T</th>
                      </tr>
                    </thead>
                  <tbody>
                    {
                      session.teams.map((team, index) => {
                        if(team.stats){
                          return (
                            <tr key= {`team${index}`}>
                            <th scope="row">{team.stats.position}</th>
                            <td>{team.name}</td>
                            <td>{team.stats.played}</td>
                            <td>{team.stats.won}</td>
                            <td>{team.stats.lost}</td>
                            <td>{team.stats.tie}</td>
                          </tr>
                          )
                        } else {
                          return null;
                        }
                      })
                    }
                  </tbody>
                  </Table>
                }
              />
            </div>
          ))
        }
      </dl>
    </Wrapper>
  );
}

export default Standings;