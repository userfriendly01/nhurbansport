import React, { useContext } from 'react'
import { 
  Card
} from '@material-ui/core'
import {
  Accordion,
  Cart,
  Container,
  DeleteIcon,
  EditIcon,
  Image,
  Text,
  TextContainer
} from '../../components'
import { StateContext } from '../../context/appContext.jsx'
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'
import { deleteLeague} from './LeagueUtil.jsx'

const StyledAccordian = styled(Accordion)`
  font-weight: unset;
  background: white;
  color: black;
  &::after {
    color: "black";
  }
`;

const League = ({ match }) => {
  const context = useContext(StateContext);
  const leagueId = match.params.id;
  const leagues = context.state.leagueContext.leagues;
  const league = leagues.find(obj => obj.sessionId === leagueId) ? leagues.find(obj => obj.sessionId === leagueId) : {};
  const imagePlaceholder = "https://firebasestorage.googleapis.com/v0/b/nh-urban-sport.appspot.com/o/images%2FNo%20Image.JPG?alt=media&token=dc5a3422-0cb5-4433-b391-7f433a15d35d";
  
  const handleDelete = () => {
    deleteLeague(leagueId);
  };
  
  return (
    <Card>
      <Container>
        <Container direction="column" justify="flex-start" align="center">
          <Container direction="column" border="2px solid black" margin="10" height="320" width="325">
            { league.image == null ?
              <Image upload={false} url={imagePlaceholder} height="320" width="325"/>
              :
              <Image upload={false} url={league.image} height="320" width="325"/>
            }
          </Container>
          <Container direction="column" border="2px solid black" margin="10" width="450">
              { league.html == null ?
                <TextContainer>No Description Found</TextContainer>
                :
                <TextContainer align="left">
                  <Text size="12px">{ReactHtmlParser(league.html)}</Text>
                </TextContainer>
              }
          </Container>
        </Container>
        <Container direction="column" justify="flex-start">
          <Container>
            <EditIcon route="/edit-league" id={leagueId} />
            <DeleteIcon deleteFunction={handleDelete}/>
          </Container>
          <Container direction="column"  margin="10" width="325">
            <TextContainer align="left">
            <Text size="32px">{league.name}</Text>
            <Text size="24px">{league.location}</Text>
            <Text size="24px">{league.length}</Text>
            <Text size="18px" color="#BADA55" align="left">{league.price}</Text>
            </TextContainer> 
          </Container>
            <Cart/>
          <Container direction="column" margin="10" height="320" width="325" justify="flex-start">
            <StyledAccordian title={"DISCLAIMER"} expand={false} content={league.disclaimer}/>
            <StyledAccordian title={"SPECIAL INSTRUCTIONS"} expand={false} content={league.instructions}/>
            <StyledAccordian title={"COUPONS"} expand={false} content={league.coupons}/>
          </Container>
        </Container>
      </Container>
    </Card>
  );
};

export default League;