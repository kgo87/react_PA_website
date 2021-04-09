import React from 'react';
import "./style.css"

function Jumbotron() {
    return (

        <div className="jumbotron jumbotron-fluid">
            {/* <div className="container"> */}
                <nav className="navbar navbar-expand-lg">

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item active">
                                <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/portfolio">Portfolio </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/contact">Team </a>
                            </li>

                        </ul>
                    </div>
                </nav>
                {/* <h1 className="display-4">Predictive Analytics CoP</h1> */}
            {/* </div> */}
        </div>
    )
}

export default Jumbotron;