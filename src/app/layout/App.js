import React, { Component } from 'react';
import {Container} from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard.js';
import NavBar from '../../features/nav/NavBar/NavBar';
import {Route, Switch} from 'react-router-dom'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard.js';
import UserDetailed from '../../features/user/UserDetailed/UserDetailed.js';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage.js';
import TestComponent from '../../features/testarea/TestComponent';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
        <Route path="/(.+)" render={()=>(
          <div>
            <NavBar/>
            <Container className="main">
            <Switch>
            <Route exact path='/' component={HomePage}/>
              <Route path='/events' component={EventDashboard}/>
              <Route path='/test' component={TestComponent}/>
              <Route path='/event/:id' component={EventDetailedPage}/>
              <Route path='/people' component={PeopleDashboard}/>
              <Route path='/profile/:id' component={UserDetailed}/>
              <Route path='/settings' component={SettingsDashboard}/>
              <Route path='/createEvent' component={EventForm}/>
            </Switch>
            </Container>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
