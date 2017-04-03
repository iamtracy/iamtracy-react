'use strict';

import React from 'react';
import {NavLink} from 'react-router-dom';

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
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact
                            activeClassName="active">Home</NavLink>
                            <span className="sr-only">Home</span>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/work" exact
                            activeClassName="active">Work</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" exact
                            activeClassName="active">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
});

export default Nav;
