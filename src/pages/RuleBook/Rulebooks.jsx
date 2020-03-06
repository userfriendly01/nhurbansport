import React, { useContext } from 'react'
import {
  AddButton,
  Wrapper,
  Image,
  DisplayCard
} from '../../components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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


const Rulebooks = () => {
    const context = useContext(StateContext);
    const rulebooks = context.state.adminContext.rulebooks;
    
    return (
        <Wrapper direction="column" align="center">
            <Wrapper>
                <Image id="Leagues Banner"
                  width="650px"
                  height="320px">
                </Image>
            </Wrapper>
            <StyledWrapper>
                {
                  rulebooks.map((rulebook, index) => (
                      <div key={`session${index}`} >
                        <StyledLink to={`/rulebook`}>
                          <DisplayCard margin="5">
                            <Wrapper direction="column" width="200" align="center">
                              <StyledImage src={rulebook.image} />
                              <DisplayCard size="14">{rulebook.name}</DisplayCard>
                            </Wrapper>
                          </DisplayCard>
                        </StyledLink>
                      </div>
                  ))
                }
                <AddButton to="/add-rulebook" />
            </StyledWrapper>
        </Wrapper>
    );
}

export default Rulebooks;