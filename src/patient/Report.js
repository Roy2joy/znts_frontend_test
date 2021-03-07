import React, { useState,useEffect }  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import {Route,Router,Switch} from "react-router-dom";
import { MDBContainer, MDBSelect ,MDBRow, MDBCol, MDBCard,MDBCardBody,MDBCardImage,MDBInput, MDBBtn } from 'mdbreact';
import Select from 'react-select';
import DoctorPageP from "./doctorP"
import FullReport from "./fullReport"
import {createBrowserHistory} from 'history';
import { render } from "@testing-library/react";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


function ReportPage(props){


  const search = props.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdFromURL = params.get('id'); 

  console.log(IdFromURL)

  const [deptID, setDeptID] = useState(null);
  const [nameDep, setNameDep] = useState([]);
  useEffect(() => {

    fetch(`http://localhost:3001/get/viewMedicalReport?id=${IdFromURL}`)
    .then(Response => Response.json()) 
    .then(json=> { 
     setNameDep(json.Data);
     console.log(json.data);
    })

  },[])

    

    return (
      <div style={{backgroundColor:"skyblue" ,height:"100%",width:"100%"}}>   
        <Link to="/"><MDBBtn >Home</MDBBtn></Link>
        <h2 style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>Report Info</h2>
        <br />

        {
          nameDep.map((item,index)=>(
            <div key={index}  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
              <h3>
               RepID : {item.RepID}
              </h3>
              <h3>
               Date : {item.Date}
              </h3>
             <h3>
             Examined by : {item.ExaminedBy}
                </h3>
                <MDBBtn href = {`http://localhost:3000/fullReport?id=${item.RepID}`}>View Report</MDBBtn>
            </div>
          ))
        }
        
    </div>


    
  );
}


export default ReportPage;