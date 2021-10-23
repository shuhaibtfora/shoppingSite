import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carditemsub from './Carditemsub'
import "./Mainpage.css"
import axios from "axios"
import CardSampl from './CardSampl'
import Cardfirst from './Cardfirst'
import Loding from './Loding'
import {browserHistory, Router, Route} from 'react-router';
import {useHistory } from "react-router-dom";



export default function Mainpage() {

    const hist=useHistory()
    const [photo, Setphoto] = useState([])
    const [loading,SetLoading]=useState(true)

    const Logout=()=>{
        localStorage.clear();
        hist.push('/login')

    }


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            // console.log(res.data[1])
            const images = res.data
            Setphoto(images)
            SetLoading(false)
            console.log(images)
        })

    }, [])

    if(loading){
        return (

            <Loding />
        )
    }else{
        
          return (
              <div>
                  <header className="test-heder">
                      <div className="wrapp">
                          <div className="contentt">
                              <div className="logot"><h3 className="logo-txt">LOGO</h3></div>
                              <div className="login-section">
                                  <Link style={{textDecoration:"none",color:"black"}} to="/login"><button className="bttnt bttnt-login">Login/Sign up</button></Link>
                                  <div className="btt-parent">
                                      <button className=" bttnt-stuff" onClick={Logout}>Log out</button>
                                      
                                      <span style={{ fontSize: "20px", fontWeight: "600" }}>+</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </header>
                  {/* Round shape starting */}
                  <section>
                      <div className="wrapp wrapp-rd">
                          <div className="round-parent">
                              <div cla20pxssName="round-flex">
                                  <div className="round rd1">
                                  </div>
                                  <h5 className="rd-txt">Cars</h5>
                              </div>
                              <div className="round-flex">
                                  <div className="round rd2">
                                  </div>
                                  <h5 className="rd-txt">Electronics</h5>
                              </div>
                              <div className="round-flex">
                                  <div className="round rd3">
                                  </div>
                                  <h5 className="rd-txt">Sport&Fitness</h5>
                              </div>
                              <div className="round-flex">
                                  <div className="round rd4">
                                  </div>
                                  <h5 className="rd-txt">Travel & Trips</h5>
                              </div>
                              <div className="round-flex">
                                  <div className="round rd5">
                                  </div>
                                  <h5 className="rd-txt">Pets</h5>
                              </div>
                              <div className="round-flex">
                                  <div className="round rd8">
                                  </div>
                                  <h5 className="rd-txt">Properties</h5>
                              </div>
                              <div className="round-flex">
                                  <div className="round rd6">
                                  </div>
                                  <h5 className="rd-txt">Explore</h5>
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* Round shape Ending */}
                  {/* < ------------------------------------------> */}
      
                  {/* Input and search box Starting */}
                  <section>
                      <div className="input-container">
                          <div className="input-wrap">
                              <div className="inp-boxx">
                                  <input className="inpp" type="text" placeholder="Search car, propetry and more..." />
                                  <button className="inp-btn">Search</button>
                              </div>
      
                          </div>
                      </div>
                  </section>
                  {/* Input and search box Ending */}
                  {/* < ------------------------------------------> */}
                  {/* card section starting */}
                  <section>
                      <div className="card-wrappert">
                          <h5 className='frd'>Fresh Recommended</h5>
                          <div className="card-row">
                              {photo.slice(12, 16).map((val) => {
                                  return (
      
                                      <Cardfirst title={val.title} bgimg={val.image} price={val.price} category={val.category} id={val.id} />
      
                                  )
      
                              })}
                          </div>
                          {/* Second row starting */}
                          {/* <Carditemsub /> */}
                          <div className="card-row second-row">
                              {photo.slice(0, 4).map((val) => {
                                  return (
      
                                      <Carditemsub id={val.id} title={val.title} bgimg={val.image} price={val.price} category={val.category} />
                                  )
                              })}
                          </div>
                          {/* Second row Ending  */}
                          {/* < ------------------------------------------> */}
      
                      </div>
      
                  </section>
                  {/* card section Ending */}
              </div>
          )

    }

}
