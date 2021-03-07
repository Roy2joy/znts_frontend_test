import "../home/home.css"
import React from "react";
import { Link } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import logo from "./patient.jpg";
import "./patient.css"
import DepartPageP from "./finddocP"
import ReportPage from "./Report"
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});









function Sidenav_login (props) {

    const search = props.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id'); 

console.log(IdFromURL);

    return (
        <div>
        <div className="sidenav">
        <Link to="/" >Home</Link>
             <Link to={`DepartPageP?id=${IdFromURL}`}>Request Appointment</Link>
            <Link to={`Report?id=${IdFromURL}`} >Medical Report</Link>
        </div>


<div className={`centered-patient`}>
<img src={logo} alt="User" />

</div>

<div style={{position: 'relative', left: '300px', top: '20px'}}>

    <h1 style={{color: 'lightskyblue',}}>Patient Portal</h1>
    <br />
    <br />
    <h3 style={{color: 'lightskyblue',}}>For Help use the left Options.</h3>
    </div>



</div>




    );

}

export default Sidenav_login;