import "./home/home.css"
import React from "react";
import FormPage from "./login/login";
import About from "./about";
import Contact from "./contact";
import departPage from "./finddoc";
import { Link } from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function Sidenav (props) {

    return (

        <div className="sidenav">
             <Link to="/" >Home</Link>
            <Link to="About" >About Us</Link>
            <Link to="login" >For Patients</Link>
            <a href="Sidenav_Emp">Employees</a>
            <a href="Contact">Contact Us</a>
            <a href="DepartInfo">Find Doctor</a>
        </div>

    );

}

export default Sidenav;