import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = (props) => {
    return (
        <div className="nav">
            <ul>
                <Link className="nav-link" to="/send-money"> SEND MONEY </Link>
                <Link className="nav-link" to="/add-client"> ADD CLIENT </Link>
                <Link className="nav-link" to="/transfer-history"> TRANSFER HISTORY </Link>
                <Link className="nav-link" to='/about'> ABOUT </Link>
                <Link className="nav-link" to="/"> LOG OUT </Link>
            </ul>
        </div>
    );
};

export default NavBar