import "./Employee.css"
import React, { useState,useEffect }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Axios from "axios";
import Emp_doctor from "./Emp_doctor"
import Norecord from "./NoRecord"
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import logo from "./user.png";
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});






function CheckNext (props){


    const search = props.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdFromURL = params.get('id'); 

  console.log(IdFromURL)

  const [status, setStatus] = useState(null);
  const [nameDep, setNameDep] = useState([]);


  useEffect(() => {

    fetch(`https://znts-backend.herokuapp.com/get/checkDoctorAppointment?id=${IdFromURL}`)
    .then(Response => Response.json()) 
    .then(json=> { 
      
      if(json.msg == "No Records") {
        window.location.href = `https://znts-frontend.herokuapp.com/NoRecord`;
      }
      else{
     setNameDep(json.Data);
    }
     
        //setNameDep(json.Data);
     
    // console.log(json);
    console.log(nameDep);
    })

  },[])

  


 




  return (
    <div style={{backgroundColor:"skyblue" ,height:"100%",width:"100%"}}>   
      <Link to="/"><MDBBtn >Home</MDBBtn></Link>
      <Link to="/Emp_doctor"><MDBBtn >Go Back</MDBBtn></Link>
      <h2 style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>Appointments Due:</h2>

    <h3>{status}</h3>

    <div>
      {
        nameDep.map((item,index)=>(
          <div key={index}  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h5>
             DocID: {item.DocID}
            </h5>
            <h5>
              Date: {item.Date}
            </h5>
            <h5>
              Time :{timeSet(item.Time)}
            </h5>
            <h5>
              Fee :{item.FeeBalance}
            </h5>
            <h5>
              PatID: {item.PatID}
            </h5>
            <h5>
              Symptoms:{item.Symptoms}
            </h5>
            <h5>
             AppID: {item.AppID}
            </h5>
                <MDBBtn onClick={() => {AppFunc(item.AppID)}}>Complete Appointment</MDBBtn>
          </div>
        ))

      }
      </div>
      
  </div>


  
);

  };



  function AppFunc(ID) {

    Axios.post("https://znts-backend.herokuapp.com/posts/completeAppointment", {
      AppID: ID
      //Password: loginPass,
    })
      .then((Response) => {
                if(Response.data.msg =="Appointment deactivate") {
                    window.location.href = `https://znts-frontend.herokuapp.com/Emp_doctor`;
                }

      })

    }


    function timeSet(timing) {
      if(timing.length == 1){
        return timing;
      }
      else if(timing.length == 2) {
        return timing;
      }

      if(timing.length > 1) {
        if(timing[1] == ".") {
          var timing1=timing[0]+".30";
          return (timing1);
        }
        else if(timing[2] == ".") {
          timing1=timing[0]+timing[1]+".30";
          return (timing1);
        }

      }
    }

    

export default CheckNext;