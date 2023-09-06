import React from 'react'
import {useLocation, NavLink} from "react-router-dom";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../assets/css/Header.css";


const Header = () => {
    let location = useLocation();
    let {pathname} = location;
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className={`p-4 ${pathname === "/" ? "bg-white" : "header-style"} navnav`}>
            <div className="d-flex align-items-center">
                <NavLink className={"nav-link domainfin me-3 flex-grow-1"} to="/">
                    DOMAINFINDER
                </NavLink>
                <div className="d-flex align-items-center">
                    <div className="d-none d-md-flex">
                        <NavLink className={"nav-link me-3"} to="/about">
                            About us
                        </NavLink>
                        <span className="me-3">For Developers</span>
                        <NavLink className={"nav-link me-3"} to="/admin">
                           Admin
                        </NavLink>
                        <NavLink className={"nav-link d-block mb-2"} to="/result">
                        Result
                    </NavLink>
                    </div>

                    <button
                        className={`d-md-none btn btn-link togglenav ${
                            showMobileMenu ? "bg-dark text-light" : "bg-light text-dark"
                        }`}
                        onClick={toggleMobileMenu}
                        aria-expanded={showMobileMenu ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} />
                    </button>
                </div>
            </div>
            {showMobileMenu && (
                <div className="d-md-none mt-3 burgermenumobile">
                    <span className="mb-2 d-block">Main</span>
                    <NavLink className={"nav-link d-block mb-2"} to="/about">
                        About us
                    </NavLink>
                    <span className="mb-2 d-block">For Developers</span>
                    <NavLink className={"nav-link d-block mb-2"} to="/admin">
                        Admin
                    </NavLink>
                    <NavLink className={"nav-link d-block mb-2"} to="/result">
                        Result
                    </NavLink>
                    <span className="mb-2 d-block">Terms of Service</span>
                    <span className="mb-2 d-block">Privacy Policy</span>
                    <span className="mb-2 d-block">Trust & Safety</span>
                </div>
            )}
        </div>
    );
};

export default Header;