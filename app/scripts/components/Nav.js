'use strict';

import React from 'react';

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
                            <a className="nav-link" href="#">Home 
                            <span className="sr-only">Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
});

export default Nav;