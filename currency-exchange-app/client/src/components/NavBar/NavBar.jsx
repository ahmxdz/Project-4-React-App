import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'



const NavBar = (props) => {
    return (
        <div className="nav">
            <ul className="nav-menu">
                <Link className="nav-link" to="/" > LOGO </Link>
                <Link className="nav-link" to="/send-money"> SEND MONEY </Link>
                <Link className="nav-link" to="/add-client"> ADD CLIENT </Link>
                <Link className="nav-link" to="/transfer-history"> TRANSFER HISTORY </Link>
                <Link className="nav-link" to='/about'> ABOUT </Link>
                <Link className="nav-link" to="/"> LOG OUT </Link>
            </ul>
            <ul className="navBtn">
            <button class="signin-btn"><Link className="nav-link" to="/sign-in">SIGN IN</Link></button>
            <button> <i class="fa-solid fa-bars"></i> </button>

            </ul>
        </div>
    );
};

export default NavBar