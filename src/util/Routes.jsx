import React from 'react'
import Home from '../pages/Home.jsx';
import Leagues from '../pages/Leagues.jsx';
import LiabilityWaiver from '../pages/LiabilityWaiver.jsx';
import SocialEvents from '../pages/SocialEvents.jsx';
import Veterans from '../pages/Veterans.jsx';
import PlayerPortal from '../pages/PlayerPortal.jsx';
import AdminHome from '../pages/Admin/AdminHome.jsx';
import AdminPlayers from '../pages/Admin/AdminPlayers.jsx';

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
        path: "/admin",
        main: () => <AdminHome/>
    },
    {
        path: "/players",
        main: () => <AdminPlayers/>
    }
];