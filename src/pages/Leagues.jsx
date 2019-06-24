import React from 'react'
import Container from '../components/Container.jsx'
import Image from '../components/Image.jsx'
import Text from '../components/Text.jsx'
import TextContainer from '../components/TextContainer.jsx'

const Leagues = () => {
    return(
        <div>
            <Container>
                <Image url="/src/images/league-banner-img.jpg"
                       width="650px"
                       height="320px">
                    <TextContainer bcolor="#0066ff" position="absolute" opacity="0.8">
                        <Text color="white" size="32">Leagues</Text>
                        <Text color="white" size="16">To register for a league, choose your sport, select the number of players, and click “Add to Cart.” It's that easy.</Text>
                    </TextContainer>
                </Image>
            </Container>
            <Container width="660px" wrap="wrap">
                <Container direction="column" width="200px">
                    <Image url="/src/images/home-option-1-img.jpg"
                           width="200"
                           height="180"/>
                    <Text size="14">Recreational Cornhole League in Manchester NH | Sundays (8 weeks)</Text>
                    <Text>__</Text>
                    <Text size="13" weight="normal">$40</Text>
                </Container>
            </Container>
        </div>
    );
}

export default Leagues;