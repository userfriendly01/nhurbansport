import React, { useContext } from 'react'
import {
  Accordion,
  Container,
  Image 
} from '../../components'
import { Table } from 'reactstrap';
import { StateContext } from '../../context/appContext.jsx';

const Standings = () => {
    const context = useContext(StateContext);
    const activeSessions = context.state.leagueContext.leagues;
    const images = context.state.imageContext.imageData;

  return (
          <Container direction="column" width="600" margin="0 auto">
<           Container>
              <Image url={images["Standings Banner"]}
                     name="Standings Banner"
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
                                session.sessionTeams.map((team, index) => (
                                    <tr>
                                        <th scope="row">{team.teamStats.position}</th>
                                        <td>{team.teamName}</td>
                                        <td>{team.teamStats.played}</td>
                                        <td>{team.teamStats.won}</td>
                                        <td>{team.teamStats.loss}</td>
                                        <td>{team.teamStats.tie}</td>
                                    </tr>
                                ))
                            }
                                </tbody>
                            </Table>
                        }
                      />
                    </div>
                  ))
                }
              </dl>
          </Container>
      );
}

export default Standings;