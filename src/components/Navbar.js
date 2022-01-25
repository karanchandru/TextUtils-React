import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand mx-2" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-a active mx-2" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-a mx-2" to="/about">About</Link>
                    </li>
                    
                    </ul>
                    {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'#8899A6':'light'}`}>
                    <input className="form-check-input" onClick={(props.toggleMode)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input " onClick={(props.redMode)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Enable red Mode</label>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}

Navbar.propTypessss={
    title:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"defaultstring"
}

export default Navbar
