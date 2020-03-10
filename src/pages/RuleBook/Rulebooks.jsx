import React, { useContext } from 'react'
import {
  AddButton,
  EditIcon,
  DeleteIcon,
  Wrapper,
  Image,
  DisplayCard
} from '../../components'
import { deleteRulebook } from '../../service/Database'
import styled from 'styled-components'
import { StateContext } from '../../context/appContext.jsx'

const StyledImage = styled.img`
  width: 200;
  height: 180
`;

const StyledLink = styled.a`
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


const Rulebooks = () => {
    const context = useContext(StateContext);
    const rulebooks = context.state.adminContext.rulebooks;

    const handleDelete = rulebookId => {
      deleteRulebook(rulebookId, context).then(() => {
        const deleteIndex = rulebooks.map(deletedRulebook => { return deletedRulebook.ruleBookId; }).indexOf(rulebookId);
        rulebooks.splice(deleteIndex, 1);
        context.setState({
          ...context.state,
          adminContext: {
            ...context.state.adminContext,
            rulebooks: rulebooks
          }
        });
      });
    };
    
    return (
        <Wrapper direction="column" align="center">
            <Wrapper>
                <Image id="Rulebook Banner"
                  width="650px"
                  height="230px">
                </Image>
            </Wrapper>
            <StyledWrapper>
                {
                  rulebooks.map((rulebook, index) => (
                      <div key={`rulebook${index}`} >
                        <DisplayCard margin="5" >
                          <Wrapper direction="column">
                            <Wrapper justify="center" margin="7">
                              <EditIcon route="/edit-rulebook" id={rulebook.rulebookId} />
                              <DeleteIcon deleteFunction={() => handleDelete(rulebook.rulebookId)}/>
                            </Wrapper>
                          <StyledLink href={rulebook.link}>
                            <Wrapper direction="column" width="200" align="center">
                              <StyledImage src={rulebook.image} />
                              <DisplayCard size="14">{rulebook.name}</DisplayCard>
                            </Wrapper>
                          </StyledLink>
                        </Wrapper>
                      </DisplayCard>
                    </div>
                  ))
                }
                <AddButton to="/add-rulebook" />
            </StyledWrapper>
        </Wrapper>
    );
}

export default Rulebooks;