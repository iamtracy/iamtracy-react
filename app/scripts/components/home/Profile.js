'use strict';

import React from 'react';

const logos = [
  {img: 'https://cdn.worldvectorlogo.com/logos/react.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'},
  {img: 'https://cldup.com/Rg6WLgqccB.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/bower.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/html5.svg'},
  {img: 'https://ohdoylerules.com/content/images/css3.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'},
  {img: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/jquery.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/node-sass.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/gulp.svg'}
]

const Profile = React.createClass({
  propTypes: {
    source: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      repos: [],
      logos: []
    };
  },
  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      return result;
    }).then(function(result) {
      this.setState({
        repos: result,
        logos: logos
      });
    }.bind(this));
  },
  render: function() {
    return (
      <div>
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
        <h3 className="pb-3 mt-1">Technologies</h3>
        <div className="flex-container text-center mt-3">
          
          {this.state.logos.map(function(item, index) {
            return (
              <div className="flex-column-3" key={index}>
                <img className="tech-icon" src={item.img} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

export default Profile;
