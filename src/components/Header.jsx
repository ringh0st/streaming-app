import React from 'react';
import GoogleAuth from './GoogleAuth';
import {Link} from 'react-router-dom';
const Header = () =>{
    return (
        <div className="ui labeled icon menu">
            <div className="item left menu">
                <Link to="/" className="item">
                <i className="video camera red icon"></i>
                    Streamy
                </Link>
            </div>
            <div className="item right menu">
            
                <Link to="/" className="item">
                <i className="file video blue icon"></i>
                    All Streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    )
};

export default Header;

// 1087217222329-u2qejiic5mk9c7up9q2844ievgsmvvb8.apps.googleusercontent.com