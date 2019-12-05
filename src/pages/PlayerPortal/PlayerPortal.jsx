import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Image,
    Text
} from '../../components'
import { StateContext } from '../../context/appContext.jsx'

const PlayerPortal = () => {
    const context = useContext(StateContext);
    const images = context.state.imageContext.imageData;
    return (
        <Container direction="column">
          <Container>
            <Image url={images["Player Portal Banner"]}
                    name="Player Portal Banner"
                    width="650px"
                    height="180px">
            </Image>
            </Container>
          <Container width="660px" wrap="wrap">
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/rule-book">
                    <Image url={images["Player Portal: RuleBook"]}
                           name="Player Portal: RuleBook"
                           width="200"
                           height="180"/>
                    </Link>
                    <Text size="14">NH Urban Sport Rulebook</Text>
                    <Text size="13">Your information on touchdowns, gender plays, and more.</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/schedules">
                        <Image url={images["Player Portal: Schedules"]}
                           name="Player Portal: Schedules"
                           width="200"
                           height="180"/>
                    </Link>
                    <Text size="14">League Schedules</Text>
                    <Text size="13">The who, what, where, and when – all in one place!</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/roster">
                        <Image url={images["Player Portal: Rosters"]}
                            name="Player Portal: Rosters"
                            width="200"
                            height="180"/>
                    </Link>
                    <Text size="14">League Rosters</Text>
                    <Text size="13">Here's where you'll find who's who on your team.</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/standings">
                        <Image url={images["Player Portal: Standings"]}
                           name="Player Portal: Standings"
                           width="200"
                           height="180"/>
                    </Link>
                    <Text size="14">League Standings</Text>
                    <Text size="13">Your updates for team standings</Text>
                </Container>
            </Container>
        </Container>
    );
}

export default PlayerPortal;