import React, { useState } from 'react'
import {
    Container,
    Image,
    Text,
    TextContainer
} from '../../components'
import { getStandings } from '../Standings/StandingsUtil.jsx';
import AddLeagueButton from './AddLeagueButton.jsx'
import { Card } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 200;
  height: 180
`;
const Leagues = () => {
    const values = getStandings();
    const activeSessions = values.activeSessions;
    const [ showEdit, setShowEdit ] = useState(false);
    return (
        <Container direction="column" align="center">
            <Container>
                <Image url="/src/images/league-banner-img.jpg"
                       width="650px"
                       height="320px">
                    <TextContainer bcolor="#0066ff" position="absolute" opacity="0.8">
                        <Text color="white" opacity="1" size="32">Leagues</Text>
                        <Text color="white" size="16">To register for a league, choose your sport, select the number of players, and click “Add to Cart.” It's that easy.</Text>
                    </TextContainer>
                </Image>
            </Container>
            <Container width="660px" wrap="wrap">
                {
                  activeSessions.map((session, index) => (
                      <div key={`session${index}`} >
                        
                        <Container direction="column" width="200px">
                        
                        <Card onMouseEnter={() => {setShowEdit(true)}} onMouseLeave={() => {setShowEdit(false)}}>
                        { showEdit ?
                        <button>Look at me!</button>
                        : null
                        }
                          <StyledImage src={session.image} />
                          <Text size="14">{session.name}</Text>
                          <Text size="14">{session.location} | {session.day} ({session.length})</Text>
                          <Text>__</Text>
                          <Text size="13" weight="normal">{session.price}</Text>
                          </Card>
                        </Container>
                        
                      </div>
                  ))
                }
                
                <Link to="/add-league">
                  <AddLeagueButton/>
                </Link>
            </Container>
        </Container>
    );
}

export default Leagues;