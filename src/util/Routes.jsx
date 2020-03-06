import React from 'react'
import {
    AddLeagueTemplate,
    Home,
    ImageUpload,
    League,
    Leagues,
    LiabilityWaiver,
    Schedules,
    SocialEvents,
    EventDetails,
    Veterans,
    PlayerPortal,
    Roster,
    RulebookTemplate,
    Rulebooks,
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
        path: "/rule-books",
        component: Rulebooks
    },
    {
        path: "/standings",
        component: Standings
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
    },
    {
        path: "/add-rulebook",
        component: RulebookTemplate
    },
    {
        path: "/edit-rulebook/:id",
        component: RulebookTemplate
    }
];
