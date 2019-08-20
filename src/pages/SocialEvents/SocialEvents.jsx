import React from 'react'
import Container from '../../components/Container.jsx'
import Image from '../../components/Image.jsx'
import Text from '../../components/Text.jsx'
import TextContainer from '../../components/TextContainer.jsx'

const SocialEvents = () => {
    return (
        <div>
            <Container>
                <Image url="/src/images/events-banner.jpg"
                       width="650"
                       height="320">
                    <TextContainer top="230" position="relative">
                        <Text size="32" color="white">Upcoming Events</Text>
                    </TextContainer>
                </Image>
            </Container>
            <Container border="1px solid black">
                <Image />
                <TextContainer>
                    <input type="file"/>
                </TextContainer>
            </Container>
        </div>
    );
}

export default SocialEvents;