import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <div className="row footer">
            <div className="footer-bottom p-5">
                <div><p>contact us: 019876546628</p></div>
                <div><p>email: @abc.gmail.com</p></div>
            </div>
            <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                    <li><Link to='../../services'>Srimangal Tour</Link></li>
                    <li><Link to='../../services'>Sonargaon Tour</Link></li>
                    <li><Link to='../../services'>Sundarban Tour</Link></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                    <li><Link to='../../services'>Bagherhat Tour</Link></li>
                    <li><Link to='../../services'>Chittagong tour</Link></li>
                    <li><Link to='../../services'>Rajshahi Tour</Link></li>
                </ul>
            </div>
            <div className="col-md-6 item text">
                <h3>Tour Media</h3>
                <p>Please Call (03) 6343 5556 for an booking or extra service. Every effort will be made to accomodate your preferred time with your GP.</p>
            </div>
            <p className="copyright">Tourmedia © 2021</p>
        </div>
        </>
    );
};

export default Footer;