import React from 'react'
import {
    LeagueTemplate,
    Home,
    ImageUpload,
    League,
    Leagues,
    LiabilityWaiver,
    Schedules,
    Schedule,
    ScheduleTemplate,
    SocialEvents,
    SocialEvent,
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
        path: "/about",
        render: () => <Home focus={"about"}/>
    },
    {
        path: "/contact",
        render: () => <Home focus={"contact"}/>
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
        component:  SocialEvent
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
        render: props => <ImageUpload {...props}/>
    },
    {
        path: "/add-league",
        component: LeagueTemplate
    },
    {
        path: "/edit-league/:id",
        component: LeagueTemplate
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
    },
    {
        path: "/add-schedule/:id",
        component: ScheduleTemplate
    },
    {
        path: "/schedule/:id",
        component: Schedule
    },
    {
        path: "/edit-schedule/:id",
        component: ScheduleTemplate
    }
    
];
