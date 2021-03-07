import "./home.css"
import React  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import logo from "./hospital.jpg";
import Sidenav from "../sidenav"



function HomePage (){

    

  return (
<div>
    <form>
    <div className={`centered`}>
    <img src={logo} alt="User" />
    </div>

    <div style={{position: 'relative', left: '300px', top: '20px'}}>

    <h1 style={{color: 'lightskyblue',}}>HOSPITAL MANAGEMENT SYSTEM</h1>
    <br />
    <br />
    <h2 style={{color: 'lightskyblue',}}>How Can we Help you?</h2>
    <br />
    <h3 style={{color: 'lightskyblue',}}>Click on the Patient Section if you are a Patient.
    </h3>

    </div>

    </form>

    <div>
     return <Sidenav />
    </div>

    </div>
 
  );

};

export default HomePage;