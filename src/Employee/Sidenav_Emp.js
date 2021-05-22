import "../home/home.css"
import React from "react";
import { Link } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import logo from "./employee.jpg";
import "./Employee.css"
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});







function Sidenav_Emp (props) {

    return (
        <div>
        <div className="sidenav">
        <Link to="/" >Home</Link>
             <Link to="/Emp_admin" >Admin Portal</Link>
             <Link to="/Emp_doctor" >Doctor Portal</Link>
        </div>


<div className={`centered-employee`}>
<img src={logo} alt="User" />

</div>

<div style={{position: 'relative', left: '300px', top: '20px'}}>

    <h1 style={{color: 'lightskyblue',}}>Employees Portal</h1>
    <br />
    <br />
    <h3 style={{color: 'lightskyblue',}}>For Help use the left Options.</h3>
    </div>



</div>




    );

}

export default Sidenav_Emp;