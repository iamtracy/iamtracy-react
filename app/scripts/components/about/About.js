import React from 'react';

const About = React.createClass({

  propTypes: {},

  getInitialState: function() {
    return {
      repos: ['repoArray']
    };
  },

  render: function() {
    return (
      <p>About Works</p>
    );
  }
});

export default About;
