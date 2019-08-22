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

    const events = [
        {
            id: 1,
            title: "2019 NHUS Beer Olympics",
            image: "https://firebasestorage.googleapis.com/v0/b/nh-urban-sport.appspot.com/o/images%2Fdummy-event-image.JPG?alt=media&token=04382154-c8f7-4398-b289-ce52e93b9e98"
        },
        {
            id: 2,
            title: "Faith Rocks",
            image: "https://firebasestorage.googleapis.com/v0/b/nh-urban-sport.appspot.com/o/images%2Fdummy-event-image.JPG?alt=media&token=04382154-c8f7-4398-b289-ce52e93b9e98"
        }
    ]

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
            {
                events.map(event => 
                    <Link to={`/events/${event.id}`}>
                        <Container direction="column" width="200px">
                            <Image url={event.image}
                                width="200"
                                height="180"/>
                            <Text size="14">{event.title} {event.id}</Text>
                            <Text>__</Text>
                            <Text size="13" weight="normal">$40</Text>
                        </Container>
                    </Link>
                )
                
            }
            </Container>
        </div>
    );
}

export default SocialEvents;