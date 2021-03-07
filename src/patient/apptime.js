import "./patient.css"
import React, { useState,useEffect }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import Sidenav_login from "./main"
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});




function AppointmentTime (props){


const search = props.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id'); 
const PIdFromURL = params.get('pid'); 
const DateFromURL = params.get('date'); 

console.log(IdFromURL);
console.log(PIdFromURL);
console.log(DateFromURL);




    function dateDisplay(day1){
        return day1;
    }
    
       //console.log(props.item.DeptID);
      // console.log('Login function called');
    
     // var day1,day2;
     const [doctorID, setDoctorID] = useState("");
     const [dateAppointment, setdateAppointment] = useState("");
     const [timeAppointment, setTimeAppointment] = useState("");
     const [feeAppointment, setFeeAppointment] = useState("");
     const [IDAppointment, setIDAppointment] = useState("");

     
useEffect(() => {
  
    Axios.post("https://znts-backend.herokuapp.com/posts/requestTime", {
      ID: IdFromURL,
     Date: DateFromURL,
    })
      .then((Response) => {

       
          setdateAppointment(Response.data.msg);

          setTimeAppointment(Response.data.timing);
          
          console.log(timeAppointment);
          //var timing= Response.data.timing;

          /*

        

         /* if(timing[1] == ".") {
            timing1=timing[0]+".30";
            console.log(timing1);
            setTimeAppointment(timing1);
          }
          
          else if(timing[2] == ".") {
            timing1=timing[0]+timing[1]+".30";
            console.log(timing1);
            setTimeAppointment(timing1);
          }

           
         else  if(timing[2]!=="."){

          setTimeAppointment(Response.data.timing);
        console.log("=====");
        console.log(Response.data.timing);
          }

         else if(timing[1]!=="." ){

            setTimeAppointment(Response.data.timing);
          console.log("=====");
          console.log(Response.data.timing);
            }*/

        //console.log(timing1);

     })


    Axios.post("https://znts-backend.herokuapp.com/posts/confirmAppointment", {
      DocID: IdFromURL,
      ID : PIdFromURL,
     Date: DateFromURL,
     Time:timeAppointment
    })
      .then((Response) => {
             setFeeAppointment(Response.data.FeeBalance);
             setIDAppointment(Response.data.AppID);

             console.log(timeAppointment);

     })

     
})
    
    /*console.log("++++++");
    console.log(timeAppointment);
    console.log("+++++++++");


    useEffect(() => {


      console.log("-------");

        Axios.post("http://localhost:3001/posts/confirmAppointment", {
          DocID: IdFromURL,
          ID : PIdFromURL,
         Date: DateFromURL,
         Time:timeAppointment
        })
          .then((Response) => {
                 setFeeAppointment(Response.data.FeeBalance);
                 setIDAppointment(Response.data.AppID);
         })
    
        },[])


        console.log(feeAppointment);
        console.log(IDAppointment);*/
     

        const Pay = () => {
            Axios.post("https://znts-backend.herokuapp.com/posts/makePAyment", {
          AppID: IDAppointment,
          Amount:feeAppointment
        })
          .then((Response) => {
                 //setFeeAppointment(Response.data.FeeBalance);
                 var id="Appointment Booked."
                 window.location.href = `https://znts-frontend.herokuapp.com/login?id=${id}`;

         })
        }
        
        
         //   console.log(dateAppointment
       
      
       

return (

  <div className={`back-color`} >
            <Link to="/"><MDBBtn >Home</MDBBtn></Link>
            <br />
            <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Appointment Info.</h2>
            <br />
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h3>Slots : </h3>
                </div>
<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-width`}>
        <MDBCardBody>
      <form>
        <div className="blue-text" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <h3 >{dateAppointment}</h3>
        </div>
        <br />
        <div className="blue-text" style={{display:"flex",alignItems:"center",justifyContent:"center",color:"eed"}}>
          <h3 > Fees to Pay :{feeAppointment}</h3>
        </div>
        <br />
        <br />
        <div className="text-center">
        <MDBBtn onClick={Pay}>Pay Amount</MDBBtn>
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

export default AppointmentTime;