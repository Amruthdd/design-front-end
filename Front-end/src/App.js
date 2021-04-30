import logo from './logo.svg';
import './App.css';
import React from'react' ;
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";
import Error from './components/error';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import UserOnboarding from './components/UserOnboarding';
import Profile from './components/Profile';
import Home from './components/Home';


function App() {
  return (
    <div >
      <Router>
          <Switch>
          
          <Route path="/" exact component={() => <UserOnboarding />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <Signup />} />
          {/* <Route path="/:username/page" exact component={() => <Dashboard />} /> */}
          <Route path="/:username/page" exact component={() => <Home />} />
          <Route path="/:username/profile" exact component={() => <Profile />} />





          <Route   component={ Error } />
          
          </Switch>
            
        </Router>
      
    </div>
  );
}

export default App;
