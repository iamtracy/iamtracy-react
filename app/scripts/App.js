'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

const App = React.createClass({

  propTypes: {},

  getInitialState: function() {
    return {
      repos: ['repoArray']
    };
  },

  render: function() {
    return (
      <main className="app">
        <Nav />
        <section className="container">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" component={Work} />
       </section>
     </main>
    );
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

export default App;
