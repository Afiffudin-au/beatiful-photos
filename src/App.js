import React from 'react';
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
function App() {
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
