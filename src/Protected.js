import React from 'react'
import {Route,Redirect} from "react-router-dom"

function Protected({component:Component,...rest}) {

    // const authtest=localStorage.getItem("authtest")
    const authtest = true
    return (
        <Route {...rest} render={(props)=>{
            if(authtest) return <Component {...props}/>;
            if(!authtest)
             return (
                 <Redirect to="/login"/>
             )
        }}/>
    )
}

export default Protected
