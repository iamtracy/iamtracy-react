import React from 'react';

import Profile from './Profile';

import APIS from '../api/apis';

const Home = React.createClass({

  propTypes: {},

  getInitialState: function() {
    return {
      repos: ['repoArray']
    };
  }, 

  render: function() {
    return (
      <section>
        <Profile source={APIS.profile}/>
      </section>
    );
  }
});

export default Home;