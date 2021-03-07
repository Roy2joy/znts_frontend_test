import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Sidenav from "./sidenav"
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';


function Contact () {

    return (
            <div >
<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard style={{width: "40rem",height:"600px"}}>
        <MDBCardBody style={{backgroundColor: 'linen'}}>
      <form>
      
        <div className="blue-text">
        </div>
        <div className="text-left">
        <h4 style={{color: 'Green'}}>Board of Directors:</h4>
        <h5 style={{color: 'teal'}}>M.Zulkifal Khan (Founder).</h5>
        <h5 style={{color: 'teal'}}>Nabeel Noor (Founder).</h5>
        <h5 style={{color: 'teal'}}>Saqib Zeb (Founder).</h5>
        <br />
        <br />
        <h4 style={{color: 'Green'}}>Contact Numbers:</h4>
        <h5 style={{color: 'teal'}}>Mobile No :03331112221</h5>
        <h5 style={{color: 'teal'}}>Telephone No : 0923512121</h5>
          <br />
          <br />
          
          <h2 style={{color: 'Green'}}>Email Us:</h2>
          <h5 style={{color: 'teal'}}>HMS.org@gmail.com</h5>
          <h5 style={{color: 'teal'}}>saqib656@gmail.com</h5>
          <h5 style={{color: 'teal'}}>nabeel469@gmail.com</h5>
          <h5 style={{color: 'teal'}}>zulkifal495@gmail.com</h5>
        
        </div>
        
        <h3 style={{color: 'red' , textAlign:'center'}}></h3>
      </form>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>

        <div>
            return <Sidenav />
        </div>

        </div>

        

    );

};

export default Contact;