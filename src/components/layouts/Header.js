import React from "react"
import { useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function Header() {
    const location = useLocation(); 

    return (
        <header className="FireJob_home-header">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="images/logo.png" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${location.pathname.indexOf("/brand-partnerships") >= 0 ? "location-brand-partnerships" : ""} `} id="collapsibleNavbar">
                        <ul className="navbar-nav  ml-auto   mt-lg-0 nav-rot">
                            <li className="nav-item active">
                                <HashLink className="nav-link" to="/#whoare">Who We Are</HashLink>
                            </li>
                            <li className="nav-item ">
                                <HashLink className="nav-link brand-partnership-nav" to="/brand-partnerships">Brand Partnerships</HashLink>
                            </li>
                            <li className="nav-item ">
                                <HashLink className="nav-link" to="/#sPositions">Open Positions</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/#Trailblazers">Trailblazers</HashLink>
                            </li>
                            <li className="nav-item ">
                                <HashLink className="nav-link" to="/#FireProjects">Fire Projects</HashLink>
                            </li>
                            <li className="nav-item ">
                                <HashLink className="nav-link" to="/#FireJob_Perks">Perks</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}