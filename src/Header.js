import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="">
                <header className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "black", color: "white", height: "100px" }}>
                   <Link to="/" style={{color:"white"}} className="text-decoration-none pe-3" href="">Home</Link>
                   <Link to="/local" style={{color:"white"}} className="text-decoration-none">Local</Link>
                   <Link to="/login" style={{color:"white"}} className="text-decoration-none p-3">Login</Link>
                </header>
            </div>
        )
    }
}
