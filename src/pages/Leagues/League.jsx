import React, { useContext } from 'react'
import {
  Accordion,
  Cart,
  CustomHTMLParser,
  DeleteIcon,
  DisplayCard,
  EditIcon,
  Wrapper
} from '../../components'
import { StateContext } from '../../context/appContext.jsx'
import styled from 'styled-components'
import { deleteSession } from '../../service/Database'

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
  
  const handleDelete = () => {
    deleteSession(leagueId);
  };
  
  return (
    <DisplayCard>
      <Wrapper>
        <Wrapper direction="column" >
          <Wrapper margin="10">
              <img src={league.image} height="320" width="450"/>
          </Wrapper>
          <Wrapper margin="10" width="450">
              <CustomHTMLParser html={league.html} />
          </Wrapper>
        </Wrapper>
        <Wrapper direction="column" justify="flex-start">
          <Wrapper justify="center" margin="10 0 0 0">
            <EditIcon route="/edit-league" id={leagueId} />
            <DeleteIcon deleteFunction={handleDelete}/>
          </Wrapper>
          <Wrapper direction="column" justify="flex-start" margin="10 20">
            <DisplayCard size="32px">{league.name}</DisplayCard>
            <DisplayCard size="24px">{league.location}</DisplayCard>
            <DisplayCard size="24px">{league.length}</DisplayCard>
            <DisplayCard size="18px" color="#BADA55">{league.price}</DisplayCard>
          </Wrapper>
            <Cart sessionId={leagueId}/>
          <Wrapper direction="column" width="325">
            <StyledAccordian title={"DISCLAIMER"} expand={false} content={league.disclaimer}/>
            <StyledAccordian title={"SPECIAL INSTRUCTIONS"} expand={false} content={league.instructions}/>
            <StyledAccordian title={"COUPONS"} expand={false} content={league.coupons}/>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </DisplayCard>
  );
};

export default League;