import React from "react";
import "./style.css";

function Navbar() {

  return (


    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'rgb(168,0,168)'}}>

      <div className="collapse navbar-collapse" id="navbarNav" style={{backgroundColor:'rgb(168,0,168)'}}>
        <ul className="navbar-nav">
          
          <li className="nav-item active">
            <a className="nav-link" href="/"style={{color:'rgb(230,230,230)', fontFamily: 'sans-serif'}} >About <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/portfolio" style={{color:'rgb(230,230,230)', fontFamily: 'sans-serif'}}>Portfolio </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/contact" style={{color:'rgb(230,230,230)', fontFamily: 'sans-serif'}}>Team </a>
          </li>

        </ul>
      </div>
    </nav>

  )
};

export default Navbar;