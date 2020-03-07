import React, { useContext } from 'react'
import {
  AddButton,
  CreateDropDown,
  StandardDropDown,
  EditIcon,
  DeleteIcon,
  Wrapper,
  Image,
  DisplayCard
} from '../../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StateContext } from '../../context/appContext.jsx'

const StyledImage = styled.img`
  width: 200;
  height: 180
`;

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    text-decoration: none;
    color: black;
  }
`;

const StyledWrapper = styled(Wrapper)`
  align-items: center;
  flex-wrap: wrap;
  width: 650px;
  margin-top: 10px;
`;

//Pull all active sessions
//Add Dropdown at the bottom to "create Schedule" when you select a currently hidden schedule
//if games exist - redirect to show shedules
//if no games exist- hide session
const Schedules = () => {
  const context = useContext(StateContext);
  const activeSessions = context.state.leagueContext.leagues;

    const handleDelete = rulebookId => {
      //Include confirmation message that all games will be deleted
      deleteSchedule(rulebookId).then(() => {
        const deleteIndex = rulebooks.map(deletedRulebook => { return deletedRulebook.ruleBookId; }).indexOf(rulebookId);
        rulebooks.splice(deleteIndex, 1);
        context.setState({
          ...context.state,
          leagueContext: {
            ...context.state.leagueContext,
            leagues: [
              ...context.state.leagueContext.leagues
              //Get to specific league: replace sessionGames with empty array
            ]
          }
        });
      });
    };
    
    return (
        <Wrapper direction="column" align="center">
            <Wrapper>
                <Image id="Schedules Banner"
                  width="650px"
                  height="230px">
                </Image>
            </Wrapper>
            <StyledWrapper>
                {
                  activeSessions.map((session, index) => (
                      <div key={`session${index}`} >
                        <DisplayCard margin="5" >
                          <Wrapper direction="column">
                            <Wrapper justify="center" margin="7">
                              <EditIcon route="/edit-schedule" id={session.sessionId} />
                              <DeleteIcon deleteFunction={() => handleDelete(session.sessionId)}/>
                            </Wrapper>
                          <StyledLink to={`/schedule/${session.sessionId}`}>
                            <Wrapper direction="column" width="200" align="center">
                              <StyledImage src={session.image} />
                              <DisplayCard size="14">{session.sessionFriendlyName}</DisplayCard>
                            </Wrapper>
                          </StyledLink>
                        </Wrapper>
                      </DisplayCard>
                    </div>
                  ))
                }
                <AddButton to="/add-schedule" />
            </StyledWrapper>
            <CreateDropDown width="300" options={["Option 1", "Option 2", "Monkey", "Gene"]} />
            <StandardDropDown isSearchable={false} width="300" options={["Option 1", "Option 2", "Monkey", "Gene"]} />
        </Wrapper>
    );
}

export default Schedules;