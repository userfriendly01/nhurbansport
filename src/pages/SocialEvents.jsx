import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container.jsx'
import Image from '../components/Image.jsx'
import Text from '../components/Text.jsx'
import TextContainer from '../components/TextContainer.jsx'

const EventBannerText = styled.div`
    text-align: center;
    white-space: pre-line;
    padding: 0 5 5 5;
    color: white;
    font-size: 32;
    position: relative;
    top: 230;
`;

const EventsContainer = styled.div`
    align-items: center;
    margin-top: 10px;
    max-width: 660;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Event = styled.div`
    margin: 10 10;
    text-align: center;
    max-width: 200;
`;

const EventImage = styled.div`
    background-image: ${props => props.img};
    background-size: 100% 100%;
    border: 1px solid grey;
    margin: 10;
    min-width: 200;
    min-height: 180px;
`;

const EventText = styled.div`
    font-size: ${props => props.size};
    white-space: pre-line;
`;


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
                    <Text/>
                </TextContainer>
            </Container>
        </div>
    );
}

export default SocialEvents;