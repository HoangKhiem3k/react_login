import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import  Home  from './pages/Home/Home';
import LoadingComponent from './components/LoadingComponent/LoadingComponent.js';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
function App() {

  const history = useHistory()
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch({type: 'ADD_HISTORY',history: history})
  },[])
  return (
    <>
      {/* <LoadingComponent/> */}
      <Switch>
        <Route exact path='/home' component={Home}></Route>
        <UserLoginTemplate exact path='/login' Component={Login}/>
      </Switch>
    </>
  );
}

export default App;
