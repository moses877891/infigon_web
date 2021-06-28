import React from 'react';
import Logo from '../../assets/infigon-logo-new.png';

import { Link } from 'react-router-dom';

import './Navbar.styles.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href='\' className="navbar-brand" ><img className="img-fluid resp m-2" src={Logo} alt="logo" /></a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link className="txt" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="txt active" to="/infigon_web">How we help</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="txt" to="/programs">Programs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="txt" to="/faqs">FAQS</Link>
                    </li>
                </ul>
                <button className="btn"><Link to='/contact' style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>Get in Touch</Link></button>
            </div>
        </nav>
    );
}

export default Navbar;