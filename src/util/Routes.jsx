import React from 'react'
import {
    Home,
    Leagues,
    LiabilityWaiver,
    SocialEvents,
    Veterans,
    PlayerPortal,
    Roster,
    HowTo,
    RuleBook
} from '../pages'


export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home/>,
    },
    {
        path: "/leagues",
        main: () => <Leagues/>
    },
    {
        path: "/liability",
        main: () => <LiabilityWaiver/>
    },
    {
        path: "/events",
        main: () => <SocialEvents/>
    },
    {
        path: "/veterans",
        main: () => <Veterans/>
    },
    {
        path: "/playerportal",
        main: () => <PlayerPortal/>
    },
    {
        path: "/roster",
        main: () => <Roster/>
    },
    {
        path: "/how-to",
        main: () => <HowTo/>
    },
    {
        path: "/rule-book",
        main: () => <RuleBook/>
    }
];