'use strict';

import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right"
            type="button" data-toggle="collapse"
            data-target="#navbarText" aria-controls="navbarText"
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <div className="container">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact
                                    activeClassName="active">Home</NavLink>
                                    <span className="sr-only">Home</span>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/work" exact
                                    activeClassName="active">Work</NavLink>
                                    <span className="sr-only">Work</span>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" exact
                                    activeClassName="active">About</NavLink>
                                    <span className="sr-only">About</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
});

export default Nav;
