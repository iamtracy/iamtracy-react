'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import Favicon from 'react-favicon';

const App = React.createClass({

  propTypes: {},

  getInitialState: function() {
    return {
      repos: ['repoArray']
    };
  },

  render: function() {
    return (
      <div>
        <Favicon url={['./favicon.png']}/>
      <Nav />
      <main className="app">
        <div className="container main">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Footer />
        </div>
     </main>
     </div>
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
