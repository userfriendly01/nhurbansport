import React, { useContext } from 'react';
import { StateContext } from '../../context/appContext.jsx';



const SocialEvent = ({ match }) => {
    const context = useContext(StateContext);
    const eventId = match.params.id;
    const events = context.state.adminContext.events;
    const event = events.find(obj => obj.eventId === eventId) ? events.find(obj => obj.eventId === eventId) : {};

    return (
        <div>
            {event.title}
        </div>
    )

}

export default SocialEvent;



