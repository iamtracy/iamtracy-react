'use strict';

import React from 'react';

import Tech from '../tech/Tech';
import LoadingAnimation from '../loading/Loading';

const Profile = React.createClass({
  propTypes: {
    source: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      repos: [],
      loading: true
    };
  },
  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      return result;
    }).then(function(result) {
      this.setState({
        repos: result,
        loading: false
      });
    }.bind(this));
  },
  render: function() {
    if (this.state.loading) {
      return (
        <div className="loading-animation">
          <LoadingAnimation />
        </div>
      );
    }
    return (
      <div>
        <div className="flex-container profile">
          <div className="flex-column-4">
            <img className="rounded-circle profile-pic" src={this.state.repos.avatar_url} />
          </div>
          <div className="flex-column-8">
            <div className="pt-2">
              <h3>{this.state.repos.name}</h3>
              <h6>{this.state.repos.company} | {this.state.repos.location}</h6>
              <p className="profile-phrase">{this.state.repos.bio}</p>
            </div>
          </div>
          <div className="flex-column-12 pt-3">
          </div>
        </div>
        <Tech />
      </div>
    );
  }
});

export default Profile;
