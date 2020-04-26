import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './BS1.css';
import LogIn from './components/LogIn';
import {Register} from './components/Register';
import Home from './components/Home';
import Account from "./components/Account";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/counterActions';


class BS1 extends Component{
  render(){
    return(
      <>
        <Router>
          <Switch>
            <Route path='/Account'>
              <Account />
            </Route>

            <Route path='/Register'>
              <Register/>
            </Route>

            <Route path='/Login'>
              <LogIn/>
            </Route>
            
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default BS1;
