import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AdminHome, AdminPlayers } from '../pages/Admin/AdminPlayers.jsx'

export default () => (
  <BrowserRouter>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBNav color="grey" className="flex-column font-weight-bold">
            <MDBNavLink className="white-text" to="/players">Players</MDBNavLink>
            <MDBNavLink className="white-text" to="/schedules">Schedules</MDBNavLink>
            <MDBNavLink className="white-text" to="/teams">Teams</MDBNavLink>
          </MDBNav>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

  </BrowserRouter>
);