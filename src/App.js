import React from 'react'
import "./App.css"
import LoginForm from './LoginForm';
import Mainpage from './Mainpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Loding from './Loding';
import SignUP from './SignUP';
import Protected from './Protected';

export default function App() {
  
  return (
    <div>
      <Router>
      <Switch>
        {/* <Route path="/" exact component={Mainpage} /> */}
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUP} />
        <Protected path="/" component={Mainpage}/>
        </Switch>
      </Router>

    </div>
  )
}

