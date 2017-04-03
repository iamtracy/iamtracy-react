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
      <main className="app">
        <section className="container">
            <p>About Works</p>
        </section>
     </main>
    );
  }
});

export default About;