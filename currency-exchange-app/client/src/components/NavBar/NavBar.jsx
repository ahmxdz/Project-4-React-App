import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import mmeLogo from '../../imgs/mmelogo.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee} from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
    const noUserLoggedInNav = (
        <div className="nav">
            <ul className="navBtn">
            <Link className="nav-link-logo" to="/" >  <img className="mme-logo" src={mmeLogo} alt="" /></Link>
            {/* <Link className="nav-link" to='/about'> ABOUT </Link>
            <Link className="nav-link" to="/sign-up">SIGN UP</Link>
            <button className="signin-btn"><Link className="nav-link" to="/sign-in">LOG IN</Link></button> */}

            <Link className="nav-link" to="/send-money"> SEND MONEY </Link>
            <Link className="nav-link" to="/add-client"> ADD CLIENT </Link>
            
            <Link className="nav-link" to="/transfer-history"> TRANSFER HISTORY </Link>
            <Link className="nav-link" to='/about'> ABOUT </Link>
            
            <Link className="nav-link" to="/"> LOG OUT </Link>


            </ul>
        </div>
    )

    const userLoggedInNav = (
        <div className="nav">
            <ul className="nav-menu">
            <Link className="nav-link-logo" to="/" >  <img className="mme-logo" src={mmeLogo} alt="" /></Link>
                <Link className="nav-link" to="/send-money"> SEND MONEY </Link>
                <Link className="nav-link" to="/add-client"> ADD CLIENT </Link>
                <Link className="nav-link" to="/transfer-history"> TRANSFER HISTORY </Link>
                <Link className="nav-link" to='/about'> ABOUT </Link>
                <Link className="nav-link" to="/"> LOG OUT </Link>
            </ul>
        </div>
    )
    return (
        <div>
           {props.user ? userLoggedInNav : noUserLoggedInNav}
        </div>
    );
};

export default NavBar