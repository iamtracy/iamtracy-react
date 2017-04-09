import React from 'react';

import Repos from './Repos';
import APIS from '../api/apis';
import Projects from './Projects';

const Cards = [
  {
    url: 'https://vts.inxpo.com/scripts/Server.nxp?'+
    'LASCmd=AI:4;F:APIUTILS!51004&PageID=D7A4619A-B40B-42AD-9DC5-1FC870529D67',
    img: 'images/multireg.png',
    title: 'Registration',
    content: 'JavaScript Application'
  },
  {
    url: 'http://tlee-recipe-book.s3-website.us-east-2.amazonaws.com/recipes',
    img: 'images/recipe-book.png',
    title: 'Angular4 App',
    content: 'JavaScript Application'
  },
  {
    url: 'http://chrisfaustmedia.com/',
    img: 'images/chris-faust.png',
    title: 'chrisfaustmedia.com',
    content: 'Wordpress Customizations'
  },
  {
    url: 'http://www.mikezorbas.com/',
    img: 'images/mike-zorbas.png',
    title: 'mikezorbas.com',
    content: 'Wordpress Customizations'
  },
  {
    url: 'http://trivia-beta.s3-website-us-west-2.amazonaws.com/',
    img: 'images/trivia.png',
    title: 'Trivia (beta)',
    content: 'JavaScript Application'
  },
  {
    url: 'https://vts.inxpo.com/scripts/Server.nxp?LASCmd=AI:4;F:QS!10100&ShowKey=28709',
    img: 'images/optimizely.png',
    title: 'Custom Registration',
    content: 'HTML/CSS'
  }
];

const Work = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <div className="work">
        <h2>Projects</h2>
        <Projects cards={Cards}/>
        <h2>Github Repositories</h2>
        <Repos source={APIS.repos} />
      </div>
    );
  }
});

export default Work;
