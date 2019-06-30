import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../util/Routes.jsx'
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AdminHome, AdminPlayers } from '../pages/Admin/AdminPlayers.jsx'

export default () => (
  <Router>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBNav color="grey" className="flex-column font-weight-bold">
            <MDBNavLink className="white-text" to="/admin/players">Players</MDBNavLink>
            <MDBNavLink className="white-text" to="/admin/schedules">Schedules</MDBNavLink>
            <MDBNavLink className="white-text" to="/admin/teams">Teams</MDBNavLink>
          </MDBNav>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Router>
);