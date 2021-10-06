import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <header>
            <div>
                <nav>
                    <NavLink className="logo" to="/" exact>Logo</NavLink>
                    <ul>
                        <li>
                            <NavLink to="/post">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/project">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}