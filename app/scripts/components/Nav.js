'use strict';

import React from 'react';
import { Link } from 'react-router-dom'

const Nav = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-fixed-top navbar-toggleable-sm navbar-inverse">
            <button className="navbar-toggler navbar-toggler-right" 
            type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                            <span className="sr-only">Home</span>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/work">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  } 
});

export default Nav;