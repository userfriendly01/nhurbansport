import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container.jsx'
import Image from '../../components/Image.jsx'
import Text from '../../components/Text.jsx'
import TextContainer from '../../components/TextContainer.jsx'

const PlayerPortal = () => {
    return(
        <div>
            <Container>
                <Image url="/src/images/player-portal-banner.jpg"
                       width="650px"
                       height="180px">
                </Image>
            </Container>
            <Container width="660px" wrap="wrap">
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/how-to">
                        <Image url="/src/images/pp-how-to.jpg"
                           width="200"
                           height="180"/>
                    </Link>
                    <Text size="14">How-Tos</Text>
                    <Text size="13">First and foremost, thank you for joining the portal. Here's where to find information on exactly what you need to do</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/rule-book">
                    <Image url="/src/images/pp-rule-book.jpg"
                           width="200"
                           height="180"/>
                    </Link>
                    <Text size="14">NH Urban Sport Rulebook</Text>
                    <Text size="13">Your information on touchdowns, gender plays, and more.</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Image url="/src/images/pp-schedules.jpg"
                           width="200"
                           height="180"/>
                    <Text size="14">League Schedules</Text>
                    <Text size="13">The who, what, where, and when – all in one place!</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/roster">
                        <Image url="/src/images/pp-rosters.jpg"
                               width="200"
                               height="180"/>
                    </Link>
                    <Text size="14">League Rosters</Text>
                    <Text size="13">Here's where you'll find who's who on your team.</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/standings">
                        <Image url="/src/images/pp-standings.jpg"
                           width="200"
                           height="180"/>
                    </Link>
                    <Text size="14">League Standings</Text>
                    <Text size="13">Your updates for team standings</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Link to="/leagueleader">
                    <Image url="/src/images/pp-leader.jpg"
                           width="200"
                           height="180"/>
                    </Link>
                    <Text size="14">League Leader</Text>
                    <Text size="13">A place to recognize the MVP in each league.</Text>
                </Container>
                <Container direction="column" width="300px" bcolor="white">
                    <Image url="/src/images/pp-improve.jpg"
                           width="200"
                           height="180"/>
                    <Text size="14">How Can We Improve?</Text>
                    <Text size="13">Questions, Comments, Concerns? We want to hear from you!.</Text>
                </Container>
            </Container>
        </div>
    );
}

export default PlayerPortal;