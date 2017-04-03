import React from 'react';

const NoMatch = React.createClass({

  propTypes: {},

  getInitialState: function() {
    return {
      msg: ['404']
    };
  },

  render: function() {
    return (
        <section className="container">
            <p>{this.state.msg}</p>
        </section>
    );
  }
});

export default NoMatch;
