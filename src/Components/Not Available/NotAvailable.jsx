import React from 'react';
import './NotAvailable.css';

const NotAvailable = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <img className="img-fluid rel" src="https://i.imgur.com/Q2BAOd2.png" alt="page not available"></img>
            </div>
            <div className="col-6">
                <p className=" rel" >Page not available</p>
            </div>
        </div>
    </div>
);

export default NotAvailable;