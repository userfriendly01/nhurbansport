import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    DisplayCard,
    Image,
    TextCard,
    Wrapper
} from '../../components'

const StyledWrapper = styled(Wrapper)`
  justify-content: center;
  flex-wrap: wrap;
  width: 660px;
  margin-top: 10px;
`;

const PlayerPortal = () => {

    return (
        <Wrapper direction="column">
            <Wrapper>
                <Image id="Player Portal Banner"
                  width="650"
                  height="180" />
            </Wrapper>
          <StyledWrapper>
                <DisplayCard margin="10" height="270">
                <Wrapper direction="column" width="280px" bcolor="white" justify="center">
                    <Link to="/rule-book">
                    <Image id="Player Portal: RuleBook"
                        width="200"
                        height="180" />
                    </Link>
                        <TextCard id={"Rulebooks Intro"} />
                </Wrapper>
                </DisplayCard>
                <DisplayCard margin="10" height="270">
                <Wrapper direction="column" width="280px" bcolor="white" justify="center">
                    <Link to="/schedules">
                        <Image id="Player Portal: Schedules"
                            width="200"
                            height="180" />
                    </Link>
                        <TextCard id={"Schedules Intro"} />
                </Wrapper>
                </DisplayCard>
                <DisplayCard margin="10" height="270">
                <Wrapper direction="column" width="280px" bcolor="white" justify="center">
                    <Link to="/roster">
                        <Image id="Player Portal: Rosters"
                            width="200"
                            height="180" />
                    </Link>
                        <TextCard id={"Rosters Intro"} />
                </Wrapper>
                </DisplayCard>
                <DisplayCard margin="10" height="270">
                    <Wrapper direction="column" width="280px" bcolor="white" justify="center">
                        <Link to="/standings">
                            <Image id="Player Portal: Standings"
                                width="200"
                                height="180" />
                        </Link>
                        <TextCard id={"Standings Intro"} />
                    </Wrapper>
                </DisplayCard>
            </StyledWrapper>
        </Wrapper>
    );
}

export default PlayerPortal;