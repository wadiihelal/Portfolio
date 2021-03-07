import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div >
            <nav >
                <div >
                    <img src={avatar} alt=""/>
                 </div>

                <ul >
                    <li >
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer >
                    <p>
                        @2021 Wadii _ Mayssa (ENISo)
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
