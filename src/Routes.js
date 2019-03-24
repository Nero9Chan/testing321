import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import ControlStaffView from './components/ControlStaffView/ControlStraffView';
import EngineTeamView from './components/EngineTeamView/EngineTeamView';
import MainView from './components/MainView/MainView';


const Routes = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/LoginPage' component={LoginPage}/>
        <Route path='/main' component={MainView}/>
      </Switch>
    </BrowserRouter>
);

export default Routes;