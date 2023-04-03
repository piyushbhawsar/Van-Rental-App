import React from "react"
import { Link,NavLink } from "react-router-dom"

export default function Header() {
    const activeStyle = {
        fontWeight: "bold" ,
        textDecoration: "underline" ,
        color: "red"
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/about"
                    style={({isActive})=> isActive ? activeStyle:null}
                    >
                        About
                </NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive})=> isActive ? activeStyle:null}
                    >
                        Vans
                </NavLink>
                <NavLink 
                    to="/host"
                    style={({isActive})=> isActive ? activeStyle:null}
                >
                    Host User
                </NavLink>
            </nav>
        </header>
    )
}