import React, { useState, useEffect } from 'react';
import { IFrame } from '../../components'



const EventDetails = ({ match }) => {

    const events = [
        {
            id: 1,
            date: "Sat, Aug 31st",
            location: "Manchvegas Bar & Grill",
            title: "2019 NHUS Beer Olympics",
            src: "https://docs.google.com/document/d/e/2PACX-1vRfFNZGzMS7xVZFvn_6NGSZ6nyMuW382HNo_Qo2F3E84JBbr3fNUHnpTexTnrFXagHSonvDacB7akup/pub?embedded=true",
            image: "https://firebasestorage.googleapis.com/v0/b/nh-urban-sport.appspot.com/o/images%2Fdummy-event-image.JPG?alt=media&token=04382154-c8f7-4398-b289-ce52e93b9e98",
            status: "active"
        },
        {
            id: 2,
            date: "Sat, Aug 31st",
            location: "Manchvegas Bar & Grill",
            title: "Faith Rocks",
            src: "https://docs.google.com/document/d/e/2PACX-1vRfFNZGzMS7xVZFvn_6NGSZ6nyMuW382HNo_Qo2F3E84JBbr3fNUHnpTexTnrFXagHSonvDacB7akup/pub?embedded=true",
            image: "https://firebasestorage.googleapis.com/v0/b/nh-urban-sport.appspot.com/o/images%2Fdummy-event-image.JPG?alt=media&token=04382154-c8f7-4398-b289-ce52e93b9e98",
            status: "active"
        }
    ]

    useEffect(() => {
        fetchEvent();
    },[event])

    const [event, setEvent ] = useState({
        date: "test",
        location: "test",
        title: "test",
        image: "test",
        status: "test",
        src: ""
    })

    const fetchEvent = async () => {
        const id = match.params.id;
        const eventDetails = events.find(item => {
            return item.id==id;
        })
        setEvent(eventDetails);
    }

    return (
        <div>
            <IFrame src={event.src}
                scrolling="no"
                height="800px"
                width="1000px">
            </IFrame>
            {event.title}
        </div>
    )

}

export default EventDetails;



