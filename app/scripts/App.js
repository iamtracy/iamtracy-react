'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav';
import Repos from './components/Repos';
import Header from './components/Header';
import APIS from './api/apis';

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
          <Header source={APIS.profile}/>
          <Repos source={APIS.repos} />
       </section>
       {/*<div className="grid">
            <h2>Grid</h2>
            <div className="row">
              <div className="column-12 grid-box">.column-12</div>
            </div>
            <div className="row">
              <div className="column-6 grid-box">.column-6</div>
              <div className="column-6 grid-box">.column-6</div>
            </div>
            <div className="row">
              <div className="column-3 grid-box">.column-3</div>
              <div className="column-3 grid-box">.column-3</div>
              <div className="column-3 grid-box">.column-3</div>
              <div className="column-3 grid-box">.column-3</div>
            </div>
            <div className="row">
              <div className="column-6 grid-box">.column-6</div>
              <div className="column-3 grid-box">.column-3</div>
              <div className="column-3 grid-box">.column-3</div>
            </div>
            <div className="row">
              <div className="column-6 shift-6 grid-box">.column-6 .shift-6</div>
            </div>
            <div className="row">
              <div className="column-6 shift-3 grid-box">.column-6 .shift-3</div>
            </div>
            <div className="row">
              <div className="column-6-collapse grid-box">.column-6-collapse</div>
              <div className="column-6-collapse grid-box">.column-6-collapse</div>
            </div>
          </div>*/}
       {/*<section className="app container">
        <h2>Flex Grid</h2>
        <div className="flex-container flex-gutter">
          <div className="flex-column-12 grid-box">.flex-column-12</div>

          <div className="flex-column-6 grid-box">
            <h3>Tracy Lee</h3>
            <h6>Front End Developer</h6>
          </div>
          <div className="flex-column-6 grid-box">.flex-column-6</div>

          <div className="flex-column-3 grid-box">.flex-column-3</div>
          <div className="flex-column-3 grid-box">.flex-column-3</div>
          <div className="flex-column-3 grid-box">.flex-column-3</div>
          <div className="flex-column-3 grid-box">.flex-column-3</div>

          <div className="flex-column-6 grid-box">.flex-column-6</div>
          <div className="flex-column-3 grid-box">.flex-column-3</div>
          <div className="flex-column-3 grid-box">.flex-column-3</div>
        </div>
        <div className="flex-container flex-gutter flex-align-right">
          <div className="flex-column-6 grid-box">.flex-column-6 .flex-align-right</div>
        </div>
        <div className="flex-container flex-gutter flex-align-center">
          <div className="flex-column-6 grid-box">.flex-column-6 .flex-align-center</div>
        </div>
        <div className="flex-container flex-gutter flex-valign-center">
          <div className="flex-column-3 grid-box">.flex-column-2</div>
          <div className="flex-column-6 grid-box grid-box-tall">
            .flex-column-6 .flex-valign-center
          </div>
          <div className="flex-column-3 grid-box">.flex-column-2</div>
        </div>
        <div className="flex-container flex-gutter flex-valign-bottom">
          <div className="flex-column-3 grid-box">.flex-column-2</div>
          <div className="flex-column-6 grid-box grid-box-tall">
            .flex-column-6 .flex-valign-bottom
          </div>
          <div className="flex-column-3 grid-box">.flex-column-2</div>
        </div>
       </section>*/}
     </main>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
