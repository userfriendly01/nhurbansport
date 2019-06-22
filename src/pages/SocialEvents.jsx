import React from 'react'
import styled from 'styled-components'

const EventsBannerImage = styled.div`
    background-image: url("/src/images/events-banner.jpg");
    background-size: 100% 100%;
    min-width: 650px;
    min-height: 320px;
    position: relative;
`;

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
            <div>
                <EventsBannerImage>
                    <EventBannerText>Upcoming Events</EventBannerText>
                </EventsBannerImage>
            </div>
            <EventsContainer>
                <Event>
                    <EventImage />
                    <EventText />
                </Event>
            </EventsContainer>
        </div>
    );
}

export default SocialEvents;