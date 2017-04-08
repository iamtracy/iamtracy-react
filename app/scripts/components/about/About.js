import React from 'react';

import Treehouse from '../about/Treehouse';
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
      <div className="container">
        <p>Programming is magic that requires years of practice
          and dedication to perform.
        Starting out can be less than glorious, as I
        did about 3 years ago. At that time you'd find me at an
        entry level position (at my current company)
        during the day while taking tutorials on nights and weekend.
        With persistance comes knowledge and
        (hopefully) new responsibilities. Today you'll
        find me writing enterprise
        level JavaScript applications.</p>
        <h2>Treehouse Courses</h2>
        <div className="flex-container">
          <Treehouse source={APIS.treehouse} perScroll={12}/>
        </div>
      </div>
    );
  }
});

export default About;
