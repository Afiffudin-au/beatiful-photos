import React,{useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './header/Header';
import Login from './login/Login';
import Banner from './banner/Banner';
import Main from './main/Main';
import { useStateValue } from './stateProvider/StateProvider';
import { auth } from './firebase,';
function App() {
  const [{},dispatch] = useStateValue()
  useEffect(()=>{
    const unsubscribe =  auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
    return()=>{
      unsubscribe()
    }
  },[dispatch])
  return (
    <Router> 
      <div className="App">
        <Switch>
        <Route path="/login">
           <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Banner/>
            <Main/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
