import React from 'react'
import {
    AddLeagueTemplate,
    Home,
    ImageUpload,
    League,
    Leagues,
    LeagueLeader,
    LiabilityWaiver,
    Schedules,
    SocialEvents,
    EventDetails,
    Veterans,
    PlayerPortal,
    Roster,
    HowTo,
    RuleBook,
    Standings
} from '../pages'


export const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/leagues",
        component: Leagues
    },
    {
        path: "/liability",
        component: LiabilityWaiver
    },
    {
        path: "/events",
        exact: true,
        component: SocialEvents
    },
    {
        path: "/events/:id",
        component:  EventDetails
    },
    {
        path: "/veterans",
        component: Veterans
    },
    {
        path: "/playerportal",
        component: PlayerPortal
    },
    {
        path: "/roster",
        component: Roster
    },
    {
        path: "/how-to",
        component: HowTo
    },
    {
        path: "/rule-book",
        component: RuleBook
    },
    {
        path: "/standings",
        component: Standings
    },
    {
        path: "/leagueleader",
        component: LeagueLeader
    },
    {
        path: "/schedules",
        component: Schedules
    }
    ,
    {
        path: "/upload-image",
        render: props => <ImageUpload {...props} test={props}/>
    },
    {
        path: "/add-league",
        component: AddLeagueTemplate
    },
    {
        path: "/edit-league/:id",
        component: AddLeagueTemplate
    },
    {
        path: "/league/:id",
        component: League
    }
];
