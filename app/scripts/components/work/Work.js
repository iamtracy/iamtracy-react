import React from 'react';

import Repos from './Repos';
import APIS from '../api/apis';
import Projects from './Projects';
import Treehouse from './Treehouse';

const Cards = [
  {
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg',
    title: 'Event Reg App',
    content: 'JavaScript Application'
  },
  {
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg',
    title: 'mikezorbas.com',
    content: 'Wordpress Customizations'
  },
  {
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg',
    title: 'chrisfaustmedia.com',
    content: 'Wordpress Customizations'
  }
];

const Work = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <div>
        <h2>Projects</h2>
        <div className="flex-container">
          <Projects cards={Cards}/>
        </div>
        <h2>Github Repositories</h2>
        <div className="flex-container">
          <Repos source={APIS.repos} />
        </div>
        <h2>Treehouse Courses</h2>        
        <div className="flex-container">
          <Treehouse source={APIS.treehouse} />
        </div>
      </div>
    );
  }
});

export default Work;
