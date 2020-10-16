import React from 'react';
import './App.css';
import './assets/styles/main.css';
import './assets/styles/utility.css';
import 'element-react';
import { Button, i } from 'element-react';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'
import Nav from './layout/nav';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './pages/home/home'
import Student from './pages/student/student';
import Teacher from './pages/teacher';
import Footer from './layout/footer';
import NavBar from './layout/navBar';
import Help from './pages/help';
import Plan from './pages/plan/plan';
import Singin from './pages/Auth/singin';
import Signup from './pages/Auth/signup';



i18n.use(locale);

class App extends React.Component{
  render(){
    return (
      <Router >
        <Nav/>
        <Switch>
          <Route path={"/"} exact render={()=><><Home/><Footer/></>}/>
          <Route path={"/student"} render={()=><Student/>}/>
          <Route path={"/teacher"} render={()=><Teacher/>}/>
          <Route path={"/help"} render={()=><Help/>}/>
          <Route path={"/plan"} render={()=><Plan/>}/>
          <Route path={"/login"} render={()=><Singin/>}/>
          <Route path={"/signup"} render={()=><Signup/>}/>
        </Switch>
        
      </Router>
  );
  }
}

export default App;
