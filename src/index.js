import React, { useState } from 'react';
import ReactDom from 'react-dom';
import FormPage from './login/login';
import RegisterPage from "./register/register"
import HomePage from "./home/home"
import About from "./about"
import Contact from "./contact"
import Employees from "./Employee/Emp_admin" 
import Sidenav_Emp from "./Employee/Sidenav_Emp"
import {Route,Router,Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Sidenav_login from "./patient/main"
import Emp_admin from './Employee/Emp_admin';
import Emp_doctor from './Employee/Emp_doctor';
import DepartPage from "./finddoc";
import DoctorPage from "./Employee/doctor"
import DoctorView from "./Employee/doctorProfile"
import UpdateEmp from "./Employee/updateEmp"
import EmpPage from "./Employee/EmpData"
import DepartPageP from "./patient/finddocP";
import DoctorPageP from "./patient/doctorP"
import DoctorViewP from "./patient/doctorProfileP"
import AppointmentDate from "./patient/Appointment"
import AppointmentTime from "./patient/apptime"
import CheckNext from "./Employee/doctorAppointment"
import Norecord from "./Employee/NoRecord"
import ReportPage from "./patient/Report"
import FullReport from "./patient/fullReport"
import Addreport from "./patient/AddReport"

const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div>
        <Switch>
          <Route exact path="/" component= {HomePage}/>
          <Route exact path="/login" component= {FormPage}/>
          <Route exact path="/About" component= {About}/>
          <Route exact path="/Contact" component= {Contact}/>
          <Route exact path="/Sidenav_Emp" component= {Sidenav_Emp}/>
          <Route path="/register" component= {RegisterPage}/>
          <Route path="/Emp_admin" component= {Emp_admin}/>
          <Route path="/Emp_doctor" component= {Emp_doctor}/>
          <Route path="/DepartInfo" component= {DepartPage}/>
          <Route  path="/DoctorPage" component={DoctorPage} />
          <Route  path="/DoctorProfile" component={DoctorView} />
          <Route path="/DepartPageP" component= {DepartPageP}/>
          <Route  path="/DoctorPageP" component={DoctorPageP} />
          <Route  path="/doctorProfileP" component={DoctorViewP} />
         < Route  path="/UpdateEmp" component={UpdateEmp} />
         < Route  path="/EmpData" component={EmpPage} />
         < Route  path="/Appointment" component={AppointmentDate} />
         < Route  path="/apptime" component={AppointmentTime} />
          <Route exact path="/Sidenav_login" component= {Sidenav_login}/>
          <Route exact path="/doctorAppointment" component= {CheckNext}/>
          <Route exact path="/Norecord" component= {Norecord}/>
          <Route exact path="/Report" component= {ReportPage}/>
          <Route exact path="/fullReport" component= {FullReport}/>
          <Route exact path="/AddReport" component= {Addreport}/>
          <Route/>
        </Switch>
        </div>
      </Router>
      )  
    }
};


ReactDom.render(<App />, document.querySelector('#root'));