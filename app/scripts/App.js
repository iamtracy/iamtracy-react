'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';

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
        <div className="container main">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" component={Work} />
          <Footer />
        </div>
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
