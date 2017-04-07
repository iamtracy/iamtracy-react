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
      <div>
        <Profile source={APIS.profile}/>
      </div>
    );
  }
});

export default Home;
