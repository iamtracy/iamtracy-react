'use strict';

import React from 'react';

const Footer = React.createClass({
  propTypes: {},
  render: function() {
    return (
      <div className="text-center fixed-bottom footer mb-1">
        <a href="https://github.com/iamtracy" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
        <a href="https://linkedin.com/in/tracybryanlee" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="mailto:tleecoding@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
});

export default Footer;
