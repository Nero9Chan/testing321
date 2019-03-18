import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import ControlStaffView from './components/ControlStaffView/ControlStraffView';
import EngineTeamView from './components/EngineTeamView/EngineTeamView';


const Routes = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/LoginPage' component={LoginPage}/>
        <Route path='/ControlStaffView' component={ControlStaffView}/>
        <Route path='/EngineTeamView' component={EngineTeamView}/>
      </Switch>
    </BrowserRouter>
);

export default Routes;