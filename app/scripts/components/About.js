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
      <section className="container">
        <p>About Works</p>
      </section>
    );
  }
});

export default About;