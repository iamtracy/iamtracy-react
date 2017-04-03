import React from 'react';

import Repos from './Repos';
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
      <main className="app">
        <section className="container">
            <Profile source={APIS.profile}/>
            <Repos source={APIS.repos} />
        </section>
     </main>
    );
  }
});

export default Home;