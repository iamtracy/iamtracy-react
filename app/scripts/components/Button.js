/**
 * getboilerplate
 * version:       
 * author:       
 * description:   Button class.
 */

'use strict';

import React from 'react';
import Router from 'react-router-component';

const Button = React.createClass({

  mixins: [Router.NavigatableMixin],

  propTypes: {
    href: React.PropTypes.string.isRequired,
    size: React.PropTypes.string.isRequired
  },

  isActive: function() {
    return this.getPath() === this.props.href;
  },

  render: function() {
    let className;
    if (this.props.size) {
      className = 'button ' + this.props.size;
    }

    return (
          <Router.Link className={className} {...this.props} />
        );
  }
});

export default Button;
