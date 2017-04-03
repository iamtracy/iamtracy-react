'use strict';

import React from 'react';

const Repos = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      cards: []
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      return result;
    }).then(function(result) { 
        this.setState({
        cards: result
      });
    }.bind(this));
  },

  render: function() {
    return (
      <section className="container">
        <div className="card-columns">
          {this.state.cards.map(function(item, index){
            return ( 
              <div className="card" key={index}>
                <div className="card-block">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.language}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
});

export default Repos;
