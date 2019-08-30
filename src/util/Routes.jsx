import {
    Home,
    ImageUpload,
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
        component: ImageUpload
    }
];