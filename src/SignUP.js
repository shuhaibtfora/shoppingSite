import React, { useState } from 'react'
import axios from "axios"
import {browserHistory, Router, Route} from 'react-router';
import { Link, useHistory } from "react-router-dom";

function SignUP() {
    const [name,setName]=useState(null)
    const [phone,setPhone]=useState(null)
    const [password,setPassword]=useState(null)
    const [address,setAddress]=useState(null)
    const [email,setEmail]=useState(null)
    const hist=useHistory()
    const setSignup=()=>{
        const data = new FormData()
        data.append('name',name)
        data.append('phone',phone)
        data.append('password',password)
        data.append('address',address)
        data.append('email',email)
        var config = {
            method: 'post',
            url:'https://www.turbolux.demo.tfora.in/api/v1/painter/register/',
            data:data,
            // headers: {}
          };
          console.log(config.url,config.data,"ddddd signup")
          
          axios(config)
          .then(function (response) {
              if(response.data.status ===201){
                    setasync(response.data.auth.access)
              }else{
                  alert("signup not completed")
              }
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const  setasync= async (auth)=>{
        await localStorage.setItem("MyToken",auth) 
        hist.push('/')  
    }
    
    return (
        <div className="main">
        <div className="main-container" style={{width:"100%"}}>
            <div className="left" style={{width:"40%",height:"",backgroundColor:""}}></div>
            <div className="right" style={{width:"60%",backgroundColor:"white"}}>
                {/* rght starting */}
               
               <div className="right-container" style={{}}>
               <div className="right-chiled" style={{marginTop:"12%"}}>
               <div className="wrap top-sec">
                   <div className="content">
                       <h1 id="mainhead">SignUp page</h1>
                       
                       <p id="mainhead2">Alredy have an account?<Link style={{textDecoration:"none"}} to="/login"><span id="log">Log in</span></Link></p>
                   </div>
               </div>
               <div className="wrap">
                   <div className="content goofb">
                       <div className="google fb-and-google">
                           <span><img className="fb-goo-img" src="./google.png" alt="" /></span>
                            <h6 className="fb-goo-txt" style={{marginLeft:"8px"}}>Sign up with Google</h6>
                       </div>
                       <div className="facebook fb-and-google">
                       <span><img className="fb-goo-img" src="./google.png" alt="" /></span>
                       <h6  className="fb-goo-txt" style={{marginLeft:"8px"}}>Sign up with Facebook</h6>
                       </div>
                   </div>
               </div>
               <div className="wrap">
                   <div className="content">
                <div className="div">
               <span className="trd"></span>
               <span style={{margin:"0px 6px"}} className="cnt">or</span>
               <span className="trd"></span>
               </div>
                   </div>
               </div>
               <div className="wrap">
                   <div className="content">
                       <label className="lbel-cs" htmlFor=""style={{display:"block"}} >Name</label>
                       <div className="inp-box" style={{border:"1px solid red"}}>
                           <img style={{width:"24px",height:"20px",margin:"0px 10px"}} src="./envelope.png" alt="" />
                       <input className=" inp-first" type="text" placeholder="Enter your Name "
                        onChange={(e)=>{
                          setName(e.target.value)
                           
                       }}
                       />
                       </div>
                       <label className="lbel-cs" htmlFor=""style={{display:"block"}} >phone</label>
                       <div className="inp-box">
                           <img style={{width:"24px",height:"20px",margin:"0px 10px"}} src="./lock.png" alt="" />
                       <input className="inp inp-second" type="text" placeholder="Enter your phone numb"
                        onChange={(e)=>{
                            setPhone(e.target.value)
                             
                         }}/>
                       </div>
                       {/* aditionel row */}
                       <label className="lbel-cs" htmlFor=""style={{display:"block"}} >Password</label>
                       <div className="inp-box" style={{border:"1px solid red"}}>
                           <img style={{width:"24px",height:"20px",margin:"0px 10px"}} src="./envelope.png" alt="" />
                       <input className=" inp-first" type="text" placeholder="Enter your Password "
                        onChange={(e)=>{
                            setPassword(e.target.value)
                             
                         }}
                       />
                       </div>
                       <label className="lbel-cs" htmlFor=""style={{display:"block"}} >address</label>
                       <div className="inp-box" style={{border:"1px solid red"}}>
                           <img style={{width:"24px",height:"20px",margin:"0px 10px"}} src="./envelope.png" alt="" />
                       <input className=" inp-first" type="text" placeholder="Enter your address "
                        onChange={(e)=>{
                            setAddress(e.target.value)
                             
                         }}
                       />
                       </div>
                       <label className="lbel-cs" htmlFor=""style={{display:"block"}} >Email address</label>
                       <div className="inp-box" style={{border:"1px solid red"}}>
                           <img style={{width:"24px",height:"20px",margin:"0px 10px"}} src="./envelope.png" alt="" />
                       <input className=" inp-first" type="text" placeholder="Enter your Email "
                        onChange={(e)=>{
                            setEmail(e.target.value)
                             
                         }}
                       />
                       </div>
                   </div>
               </div>
               <div className="wrap">
                   <div className="content">
                       <input className="check chr" type="checkbox" /><span className="spntxt">I agree to Platform<span style={{fontWeight:"bold",fontSize:"16px"}} className="spn-tag spntxt"> Terms of Service </span>and<span style={{fontWeight:"bold",fontSize:"16px"}} className="spn-tag spntxt"> Privacy Policy</span></span>
                   </div>
               </div>
               <div className="wrap btn-wrap">
                   <div className="content btn-div">
                       <button className="bttn" onClick={setSignup}>Rgister</button>
                   </div>
               </div>
               </div>
               </div>
               
               {/* rght ending */}
              
            </div>
        </div>
    </div>
    )
}

export default SignUP
