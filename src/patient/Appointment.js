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
import {createBrowserHistory} from 'history';
import AppointmentTime from "./apptime"
import getBackendConnection from "../Connection";
import getFrontendConnection from "./Connection";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});




function AppointmentDate (props){


const [DocID, setDocID] = useState('');

const search = props.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id'); 
const PIdFromURL = params.get('pid'); 

console.log(IdFromURL);
console.log(PIdFromURL);




function Day(day) {


  //console.log(timeFromURL);


    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    //var n = weekday[d.getDay()];
    
    for(var i=0;i<7;i++) {
      if(i==day){
        return weekday[i];
      }
    }
    
    
    }


    function dateDisplay(day1){
        return day1;
    }
    
       //console.log(props.item.DeptID);
      // console.log('Login function called');
    
     // var day1,day2;
     const [doctorID, setDoctorID] = useState("");
     const [dateAppointment, setdateAppointment] = useState("");




var today = new Date();
var dd = today.getDate();


var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

today = yyyy+'-'+mm+'-'+dd;



var day1,day2,day3;

var today1=new Date();

day3=today1.getDay();

console.log("Day 3: "+day3);




useEffect(() => {


    Axios.post(getBackendConnection()+"posts/makeAppointment", {
      ID: IdFromURL,
      //Password: loginPass,
    })
      .then((Response) => {
 
          setdateAppointment(Response.data.Date);


      
     })

    },[])

     

     day1=dateAppointment[0]; 
     day2=dateAppointment[2]; 
            //1 2 4

console.log("Day 1: "+day1);
console.log("Day 2: "+day2);

                var mid = 0;
                if (day3 == 0) {
                  day3 = 7;
                }
         

        var Appdd1 = dd;
        var Appmm1 = mm;
        var Appyyyy1 = yyyy;
        
        var Appdd2 = dd;
        var Appmm2 = mm;
        var Appyyyy2 = yyyy;
        
        /// After
         if ((day3 > day1) && (day3 >= day2)) {
        
          
          ////date += 7
          if ( (dd+7) > 31 ) {
            
            dd = (7 - (31-dd));
            
            if (mm != 12) {
              mm = mm+1;
            }
            else if (mm==12) {
                mm = 1;
              yyyy = yyyy+1;
            }	
          }
          else if ( (dd+7) <=31 ) {
            
            dd = dd+7;
          }
        ///////////////////////////////////////////////////////////////////////////////	
          
          Appdd1 = dd;
          Appmm1 = mm;
          Appyyyy1 = yyyy;
          Appdd2 = dd;
          Appmm2 = mm;
          Appyyyy2 = yyyy;
          
          //console.log("Day1" , dd, "Month", mm, "Year", yyyy);
          /// date - day1
          if ((dd - (day3-day1)) < 1) {
        console.log("Day1" , dd, "Month", mm, "Year", yyyy);
             Appdd1 = (31 - ( (day3-day1) - dd));//////////// earlier day 1
            
            if (mm !=1) {
              
              Appmm1 = mm - 1;
            
            }
            else if (mm == 1) {
              
              Appmm1 = 12;
              Appyyyy1 = yyyy-1;
            }
              
          }
          
          else if ((dd - (day3-day1)) >= 1) {
            
            Appdd1 = dd - (day3-day1);
          }
          
          /////date - day2
          if ((dd - (day3-day2)) < 1) {
        
             Appdd2 = (31 - ( (day3 - day2) - dd));/////////////
            
            if (mm !=1) {
              
              Appmm2 = mm - 1;
            
            }
            else if (mm == 1) {
              
              Appmm2 = 12;
              Appyyyy2 = yyyy-1;
            }
              
          }
          
          
          else if ((dd - (day3-day2)) >= 1) {
            
            Appdd2 = dd - (day3-day2);
          }	
        }
        
        ////////before
          else if  ((day3 <= day1) && (day3 < day2)) {
              
            //////date + (day1-day3)
            if ( (dd+ (day1 - day3)) > 31 ) {
            
            //Appdd1 = (7 - (31-dd));   ///////////
            Appdd1 = ((day1-day3) - (31-dd));
            
            if (mm != 12) {
              Appmm1 = mm+1;
            }
            else if (mm==12) {
                Appmm1 = 1;
              Appyyyy1 = yyyy+1;
            }
          }
          
          else if ( (dd+(day1-day3)) <=31 ) {
            
            Appdd1 = dd+(day1-day3);
          }
            
          ///////date + (day2-day3)
          if ( (dd+ (day2 - day3)) > 31 ) {
            
            //Appdd1 = (7 - (31-dd));   ///////////
            Appdd2 = ((day2-day3) - (31-dd));
            
            if (mm != 12) {
              Appmm2 = mm+1;
            }
            else if (mm==12) {
                Appmm2 = 1;
              Appyyyy2 = yyyy+1;
            }		
          }
        
          else if ( (dd+(day2-day3)) <=31 ) {
            
            Appdd2 = dd+(day2-day3);
          }
          }
          
          ////mid   (only one app date) 
          else if  ((day3 > day1) && (day3 < day2)) {

            mid=1;
              
            if ( (dd+ (day2 - day3)) > 31 ) {
            
            //Appdd1 = (7 - (31-dd));   ///////////
            Appdd1 = ((day2-day3) - (31-dd));
            
            if (mm != 12) {
              Appmm1 = mm+1;
            }
            else if (mm==12) {
                Appmm1 = 1;
              Appyyyy1 = yyyy+1;
            }
              
          }
          
          else if ( (dd+(day2-day3)) <=31 ) {
            
            Appdd1 = dd+(day2-day3);
          }
          
          }

          if(Appdd1<10) 
          {
              Appdd1='0'+Appdd1;
          } 
          if(Appdd2<10) 
          {
              Appdd2='0'+Appdd2;
          } 
          
          if(Appmm1<10) 
          {
            Appmm1='0'+Appmm1;
          } 

          if(Appmm2<10) 
          {
            Appmm2='0'+Appmm2;
          } 

          if(Appyyyy1<10) 
          {
            Appyyyy1='0'+Appyyyy1;
          } 

          if(Appyyyy2<10) 
          {
            Appyyyy2='0'+Appyyyy2;
          } 
                   

           // console.log(finaldate1);
           var finaldate1=Appyyyy1+"-"+Appmm1+"-"+Appdd1;
           var finaldate2=Appyyyy2+"-"+Appmm2+"-"+Appdd2;

                
           // console.log(today);
    
              console.log(finaldate1);
              console.log(finaldate2);
              
            

              const [sendDate, setSendDate] = useState("");
         //   console.log(dateAppointment
       
         console.log(sendDate);
      
       

return (
  <div className={`back-color`} >
            <Link to="/"><MDBBtn >Home</MDBBtn></Link>
            <br />
            <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Appointment Info.</h2>
            <br />
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h3>Active Days : {Day(dateAppointment[0])} :{dateDisplay(finaldate1)}, {Day(dateAppointment[2])} : {dateDisplay(finaldate2)}</h3>
                </div>
<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-width`}>
        <MDBCardBody>
      <form>
    <p className="h5 text-center mb-4">Enter Appointment Date.</p>
        <div className="blue-text">
          <MDBInput label="Type your Date" icon="envelope" onChange={(e) => {setSendDate(e.target.value)}}/>
        </div>
        <div className="text-center">
          <MDBBtn href={getFrontendConnection()+`apptime?id=${IdFromURL}&pid=${PIdFromURL}&date=${sendDate}`}>Submit</MDBBtn>
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

export default AppointmentDate;