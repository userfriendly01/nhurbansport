import React, { useContext } from 'react'
import {
  Accordion,
  Container,
  Image,
  TextContainer
} from '../../components'
import { StateContext } from '../../context/appContext.jsx'
import ReactHtmlParser from 'react-html-parser'

const League = ({ match } ) => {
  const context = useContext(StateContext);
  const leagueId = match.params.id;
  const leagues = context.state.leagueContext.leagues;
  const league = leagues.find(obj => obj.sessionId === leagueId) ? leagues.find(obj => obj.sessionId === leagueId) : {};
  const imagePlaceholder = "https://firebasestorage.googleapis.com/v0/b/nh-urban-sport.appspot.com/o/images%2FNo%20Image.JPG?alt=media&token=dc5a3422-0cb5-4433-b391-7f433a15d35d";

  console.log("Placeholder: ", imagePlaceholder);
  console.log("League Object", league);
  console.log(ReactHtmlParser(league.html));
  
  return (
    <Container border="5px solid black">
      <Container direction="column" border="5px solid black" justify="flex-start" align="center">
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
              <TextContainer align="left">{ReactHtmlParser(league.html)}</TextContainer>
            }
        </Container>
      </Container>
      <Container direction="column" border="5px solid black" justify="flex-start">
        <Container direction="column" border="2px solid black" margin="10" height="100" width="325">
            <TextContainer align="left">{league.name + ", " + league.location + " | " + league.length }</TextContainer>
        </Container>
        <Container direction="column" border="2px solid black" margin="10" height="320" width="325">
          Cart Summary
        </Container>
        <Container direction="column" border="2px solid black" margin="10" height="320" width="325" justify="flex-start">
          <Accordion title={"DISCLAIMER"} expand={false} content={league.disclaimer}/>
          <Accordion title={"SPECIAL INSTRUCTIONS"} expand={false} content={league.instructions}/>
          <Accordion title={"COUPONS"} expand={false} content={league.coupons}/>
        </Container>
      </Container>
    </Container>
  );
};

export default League;