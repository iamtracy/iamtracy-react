import React from 'react';

const Projects = React.createClass({

  propTypes: {},

  getInitialState: function() {
    return {
      repos: ['repoArray']
    };
  },

  render: function() {
    return (
      <p>Projects Works</p>
    );
  }
});

export default Projects;