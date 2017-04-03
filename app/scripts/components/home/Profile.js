'use strict';

import React from 'react';

const Profile = React.createClass({
  propTypes: {
    source: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      repos: []
    };
  },
  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      return result;
    }).then(function(result) {
      this.setState({
        repos: result
      });
    }.bind(this));
  },
  render: function() {
    return (
        <div className="flex-container">
          <div className="flex-column-4">
            <img className="rounded-circle profile-pic" src={this.state.repos.avatar_url} />
          </div>
          <div className="flex-column-8">
            <div className="pt-3">
              <h3>{this.state.repos.name}</h3>
              <h6>{this.state.repos.company} | {this.state.repos.location}</h6>
            </div>
          </div>
          <div className="flex-column-12 pt-3">
            <p>{this.state.repos.bio}</p>
          </div>
        </div>
    );
  }
});

export default Profile;
