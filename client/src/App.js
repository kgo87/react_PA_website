import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Test from "./pages/Test"


function App() {
  return (
      <Router>
      <div>
        {/* <Jumbotron /> */}
        <Navbar />
        <br></br>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/test" component={Test} /> */}
        </Switch>
      </div>
      </Router>
    )
}

export default App;
