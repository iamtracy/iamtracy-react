import React from 'react';

// const Cards = [
//   {}
// ];

const Work = React.createClass({

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
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </section>
     </main>
    );
  }
});

export default Work;