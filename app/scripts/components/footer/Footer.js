'use strict';

import React from 'react';

const Footer = React.createClass({
  propTypes: {},
  render: function() {
    return (
      <div className="text-center fixed-bottom footer mb-1">
            <i className="fa fa-github-square" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-envelope" aria-hidden="true"></i>
      </div>
    );
  }
});

export default Footer;
