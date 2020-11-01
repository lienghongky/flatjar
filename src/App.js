import React from 'react';
import './App.css';
import './assets/styles/main.css';
import './assets/styles/utility.css';
import 'element-react';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'
import { BrowserRouter as Router,Route,Switch,withRouter } from 'react-router-dom'
import Nav from './layout/nav';
import Home from './pages/home/home'
import Student from './pages/student/student';
import Teacher from './pages/teacher/teacher';
import TeacherDetail from './pages/teacher/teacherDetail';
import Footer from './layout/footer';
import Help from './pages/help';
import Plan from './pages/plan/plan';
import History from './pages/History/History';
import Singin from './pages/Auth/singin';
import Signup from './pages/Auth/signup';
import TeacherDashboard from './pages/teacher/teacherDashboard';
import Live from './pages/student/live';



i18n.use(locale);

class App extends React.Component{
  render(){
    return (
      <Router basename={`${process.env.PUBLIC_URL}`}  >
        <Nav/>
        <Switch>
          <Route path={"/"} exact render={(props)=><><Home {...props}/><Footer/></>}/>
          <Route path={"/student"} render={(props)=><Student {...props}/>}/>
          <Route path={"/teacher"} render={(props)=><TeacherDashboard {...props}/>}/>
          <Route path={"/teachers"} render={(props)=><Teacher {...props}/>}/>
          <Route path={"/teacherdetail"} render={(props)=><TeacherDetail {...props}/>}/>
          <Route path={"/live"} render={(props)=><Live {...props}/>}/>
          <Route path={"/help"} render={(props)=><Help {...props}/>}/>
          <Route path={"/plan"} render={(props)=><Plan {...props}/>}/>
          <Route path={"/history"} render={(props)=><History {...props}/>}/>
          <Route path={"/login"} render={(props)=><Singin {...props}/>}/>
          <Route path={"/signup"} render={(props)=><Signup {...props}/>}/>
        </Switch>
        
      </Router>
  );
  }
}

export default withRouter(App);
