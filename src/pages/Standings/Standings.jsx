import React from 'react'
import {
  Accordion,
  Container,
  Image 
} from '../../components'
import { images } from '../../util/Constants.jsx'
import { Table } from 'reactstrap';
import { getStandings } from './StandingsUtil.jsx';

const Standings = () => {
    const values = getStandings();
    const activeSessions = values.activeSessions;

  return (
          <Container direction="column" width="600" margin="0 auto">
<           Container>
              <Image url={images.STANDINGS.BANNER}
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