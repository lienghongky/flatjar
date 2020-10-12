import React from 'react';
import './App.css';
import './assets/styles/main.css';
import 'element-react';
import { Button, i } from 'element-react';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'
import Nav from './layout/nav';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './pages/home/home'
import Student from './pages/student';
import Teacher from './pages/teacher';
import Footer from './layout/footer';
import NavBar from './layout/navBar';



i18n.use(locale);

class App extends React.Component{
  render(){
    return (
      <Router >
        <Nav/>
        <Switch>
          <Route path={"/"} exact render={()=><Home/>}/>
          <Route path={"/student"} render={()=><Student/>}/>
          <Route path={"/teacher"} render={()=><Teacher/>}/>
        </Switch>
        <Footer/>
      </Router>
  );
  }
}

export default App;
