import React from 'react'
import {
    Container,
    Image,
    Text,
    TextContainer
} from '../../components'
import { Link } from 'react-router-dom'

import { images } from '../../util/Constants.jsx'

const SocialEvents = () => {

    const dummyObject = {
        id: 1,
        Date: "Sat, Aug 31st",
        Location: "Manchvegas Bar & Grill",
        Title: "2019 NHUS Beer Olympics",
        Image: "https://firebasestorage.googleapis.com/v0/b/nh-urban-sport.appspot.com/o/images%2Fdummy-event-image.JPG?alt=media&token=04382154-c8f7-4398-b289-ce52e93b9e98",
        RegistrationStatus: "active",
    }

    return (
        <div>
            <Container>
                <Image url={images.EVENTS.BANNER}
                       width="650"
                       height="200">
                    <TextContainer top="230" position="relative">
                        <Text size="32" color="white">Upcoming Events</Text>
                    </TextContainer>
                </Image>
            </Container>
            <Container width="660px" wrap="wrap">
                <Link to={`/current-template/${dummyObject.id}`}>
                    <Container direction="column" width="200px">
                        <Image url={images.EVENTS.BANNER}
                            width="200"
                            height="180"/>
                        <Text size="14">Beer Olympics!</Text>
                        <Text>__</Text>
                        <Text size="13" weight="normal">$40</Text>
                    </Container>
                </Link>
            </Container>
        </div>
    );
}

export default SocialEvents;