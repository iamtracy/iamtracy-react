import React from 'react';

import Repos from './Repos';
import APIS from '../api/apis';
import Projects from './Projects';
import Udemy from './Udemy';

const Work = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <div>
        <h2>Projects</h2>
        <div className="flex-container">
          <Projects />
        </div>
        <h2>Github Repositories</h2>
        <div className="flex-container">
          <Repos source={APIS.repos} />
        </div>
        <h2>Udemy</h2>
        <div className="flex-container">
          <Udemy source={APIS.udemy}/>
        </div>
      </div>
    );
  }
});

export default Work;
