import React, { useContext } from 'react'
import {
    Container,
    Image,
    Wrapper
} from '../../components'
import { Link } from 'react-router-dom'
import { StateContext } from '../../context/appContext.jsx'

const SocialEvents = () => {
    const context = useContext(StateContext);
    const images = context.state.imageContext.imageData;
    const events = context.state.adminContext.events;
   

    return (
        <div>
            <Wrapper>
                <Image id="Events Banner"
                  width="650px"
                  height="200px">
                </Image>
            </Wrapper>
            <Container width="660px" wrap="wrap">
            {
                events.map(event => 
                    <Link to={`/events/${event.id}`}>
                        <Wrapper direction="column" width="200px">
                            <Image url={event.image}
                                width="200"
                                height="180"/>
                            <div size="14">{event.title} {event.id}</div>
                            <div>__</div>
                            <div size="13" weight="normal">$40</div>
                        </Wrapper>
                    </Link>
                )
            }
            </Container>
        </div>
    );
}

export default SocialEvents;