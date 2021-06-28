import React from 'react';
import './Homepage.styles.css';

import Phone from '../../assets/TASK_-_REACT1-removebg-preview.png'

const HomePage = () => (
    <div className="container-fluid bc">
        <div className="row">
            <div className="col-2">
                <div className="vline"></div>
            </div>
            <div className="col-5">
                <div className="container vcenter">
                    <div className="text-light">
                        <h2>How we can Help</h2>
                    </div><br />
                    <div className="text-light">
                        <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
                            This is a paragraph, where we should<br /> type a lot of words
                        </p>
                    </div><br />
                    <div className="text-light">
                        <p><l>STEP 1</l> <b>SELF ANALYSIS</b></p>
                        <p>STEP 2 <b>SELF ANALYSIS</b></p>
                        <p>STEP 3 <b>SELF ANALYSIS</b></p>
                        <p>STEP 4 <b>SELF ANALYSIS</b></p>
                    </div>
                </div>
            </div>
            <div className="col-5">
                <img src={Phone} alt="phone" className="img-fluid res vcenter"></img>
            </div>
        </div>


    </div>
);

export default HomePage;