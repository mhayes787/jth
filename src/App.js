// import React from "react";
// import "./App.css";
// import { Button, Card } from "react-bootstrap";

// function App() {
//   return <div className="App">JTH</div>;
// }

// export default App;
// import React from "react";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//component imports
import Header from "./Header/header.js";
import AboutUs from "./TeamSelect/aboutUs.js";
import ContactUs from "./TeamSelect/contactUs.js";
import Nav from "./Nav/nav.js";
import MainLanding from './TeamSelect/landing.js'

return (
  <Router>
    <div className="App">
      <div className="headerAppLevel">
        <Header />
      </div>

      <Nav />
      <Switch>
        {/* Home Route */}
        <Route exact path="/" render={this.MainLaningComponent} />
        <Route exact path="/AboutUs" render={this.AboutUsComponent} />
        <Route exact path="/ContactUs" render={this.ContactUsComponent} />
        {/* NPSDE */}
        <Route exact path="/NPSDE" render={this.NPSDELandingComponent} />
        <Route
          exact
          path="/NPSDE/Services"
          render={this.servicesComponent}
        />
        <Route
          exact
          path="/NPSDE/Services/Deployments"
          component={servicesDeployments}
        />
        <Route
          exact
          path="/NPSDE/Services/monitoringAndAlerting"
          component={monitoringAndAlerting}
        />
        <Route
          exact
          path="/NPSDE/Services/servicesStoreEnvironmentAllocation"
          component={servicesStoreEnvironmentAllocation}
        />
        {/* Orange Squad */}
        <Route exact path="/OrangeSquad" render={this.OSLandingComponent} />
        {/* Application Performance*/}
        <Route
          exact
          path="/ApplicationPerformance"
          render={this.APLandingComponent}
        />
        {/* C.I.T.E*/}
        <Route
          exact
          path="/Cite"
          render={this.CiteLandingComponent}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
