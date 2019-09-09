import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPoo, faSearch } from '@fortawesome/free-solid-svg-icons'

import { checkUsernameAvailability } from '../../util/createQuery';
import "./Header.css";

function bootstrappedNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light header-container">
            <a className="navbar-brand" href="#">
                <FontAwesomeIcon icon={faPoo} size="2x" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 shadow-sm bg-white col-md-5">
                    <div className="d-inline-block">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input className="mr-sm-2 nav-search" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 d-none" type="submit">Search</button>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Become a host </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Help</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log in</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
function Header() {

    return (
        bootstrappedNav()
    );
}

export default Header;
