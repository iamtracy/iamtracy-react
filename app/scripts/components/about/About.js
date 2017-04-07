import React from 'react';

import Treehouse from '../work/Treehouse';
import APIS from '../api/apis';

const About = React.createClass({

  propTypes: {},

  getInitialState: function() {
    return {
      repos: ['repoArray']
    };
  },

  render: function() {
    return (
      <div>
        <p>Programming is magic.</p>
        <h2>Treehouse Courses</h2>        
        <div className="flex-container">
          <Treehouse source={APIS.treehouse} />
        </div>
      </div>
    );
  }
});

export default About;
