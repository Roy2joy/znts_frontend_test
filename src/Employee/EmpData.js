import "./Employee.css"
import React, { useState,useEffect }  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import {Route,Router,Switch} from "react-router-dom";
import FormPage from "../login/login"
import { MDBContainer, MDBSelect ,MDBRow, MDBCol, MDBCard,MDBCardBody,MDBCardImage,MDBInput, MDBBtn } from 'mdbreact';
import logo from "./user.png";
import Select from 'react-select';
import {createBrowserHistory} from 'history';
import { render } from "@testing-library/react";
import UpdateEmp from "./updateEmp";
import getBackendConnection from "../Connection";
import getFrontendConnection from "./Connection";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function EmpPage (props){


    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id');
    
    var counter=1;

  console.log(IdFromURL);

//    console.log(props)
const [empID, setEmpID] = useState("");
const [nameEmp, setNameEmp] = useState("");
const [dobEmp, setDobEmp] = useState("");
const [genderEmp, setGenderEmp] = useState("");
const [contactEmp, setContactEmp] = useState("");
const [jobEmp, setJobEmp] = useState("");
const [salaryEmp, setSalaryEmp] = useState("");
const [addressEmp, setAddressEmp] = useState("");
const [specialtityEmp, setSpecialityEmp] = useState("");
const [passwordEmp, setPasswordEmp] = useState("");


   
 useEffect(() =>{
  Axios.post(getBackendConnection()+"posts/getEmployeeDetails", {
    ID: IdFromURL,
    //Password: loginPass,
  })
    .then((Response) => {

        setEmpID(IdFromURL);
        setNameEmp(Response.data.Name);
        setDobEmp(Response.data.DOB);
        setGenderEmp(Response.data.Gender);
        setContactEmp(Response.data.Contact);
        setJobEmp(Response.data.Job);
        setSalaryEmp(Response.data.Salary);
        setAddressEmp(Response.data.Address);
        setSpecialityEmp(Response.data.Speciality);
        setPasswordEmp(Response.data.Password);

   })
 },[])



    const Update = () => {

      console.log("Update Function Called.");


    Axios.post(getBackendConnection()+"posts/updateEmployee", {
    
    EmpId: IdFromURL,
    Name:nameEmp,
     DOB:dobEmp,
     Gender:genderEmp,
     Contact:contactEmp,
     Job:jobEmp,
     Salary:salaryEmp,
     Address:addressEmp,
     Speciality:specialtityEmp,
     Password:  passwordEmp
   })
     .then((Response) => {

        if(Response.data.msg =="Successfully updated") {
            var id=Response.data.msg;
          window.location.href = getFrontendConnection()+`UpdateEmp?id=${id}`
        }

        console.log(Response.data.msg);

        //console.log(nameUpdate);
        //console.log(genderUpdate);
     
    })



    }






return (
  <div className={`back-color`} >

<Link to="/"><MDBBtn >Home</MDBBtn></Link>
<Link to="UpdateEmp"><MDBBtn >Go Back</MDBBtn></Link>

<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard style={{width:"60rem"}}>
        <MDBCardBody>
      <form>
    <p className="h5 text-center mb-4">Update Employee Here</p>
        <div className="blue-text">
            <h6> Name:
          <MDBInput label={nameEmp} icon="users" onChange={(e) => {setNameEmp(e.target.value)}} />
          </h6>
          <h6> Date of Birth:
          <MDBInput label={dobEmp} icon="users" onChange={(e) => {setDobEmp(e.target.value)}} />
          </h6>
          <h6> Gender:
          <MDBInput label={genderEmp} icon="users"  onChange={(e) => {setGenderEmp(e.target.value)}}/>
          </h6>
          <h6> Contact:
          <MDBInput label={contactEmp} icon="users"  onChange={(e) => {setContactEmp(e.target.value)}}/>
          </h6>
          <h6> Job:
          <MDBInput label={jobEmp} icon="users" onChange={(e) => {setJobEmp(e.target.value)}} />
          </h6>
          <h6> Salary:
          <MDBInput label={salaryEmp} icon="users" onChange={(e) => {setSalaryEmp(e.target.value)}} />
          </h6>
          <h6> Address:
          <MDBInput label={addressEmp} icon="users"  onChange={(e) => {setAddressEmp(e.target.value)}}/>
          </h6>
          <h6> Speciality:
          <MDBInput label={specialtityEmp} icon="users"  onChange={(e) => {setSpecialityEmp(e.target.value)}}/>
          </h6>
          <h6> Password:
          <MDBInput label={passwordEmp} icon="users"  onChange={(e) => {setPasswordEmp(e.target.value)}}/>
          </h6>
           </div>
        <br />
        <br />
        <div className="text-center">
          <MDBBtn onClick={Update}>Update</MDBBtn>
        </div>
         
        
      </form>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>

  

</div>
);
};




export default EmpPage;