import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Sidenav from "./sidenav"
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';


function About () {

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
        <h4 style={{color: 'Green'}}>Our Mission:</h4>
        <h5 style={{color: 'teal'}}>Health Care with Compassion for all.</h5>
        <br />
        <br />
        <h4 style={{color: 'Green'}}>Our Vision:</h4>
        <h5 style={{color: 'teal'}}>To be the region’s leader by providing quality healthcare services.</h5>
          <br />
          <br />
          
          <h2 style={{color: 'Green'}}>Our Values:</h2>
          <h5 style={{color: 'teal'}}>Compassion, Commitment, Teamwork, Quality, Respect and Accountability</h5>
          <br />
          <br />
          <h4 style={{color: 'Green'}}>Our Strategic Priorities:</h4>
          <h5 style={{color: 'teal'}}>Provide Seamless/Easy Access Care Delivery.</h5>
          <h5 style={{color: 'teal'}}>Strategic Growth</h5>
          <h5 style={{color: 'teal'}}>Financial Strength/Viability</h5>
          
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

export default About;