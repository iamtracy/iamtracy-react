import React from 'react';

import Card from './Card';

const Projects = React.createClass({

  propTypes: {
    cards: React.PropTypes.array
  },

  getInitialState: function() {
    return {cards: this.props.cards};
  },

  render: function() {
    return (
    <div className="card-columns">
      {this.props.cards.map(function(item, index) {
        return <Card card={item} index={index}/>;
      })}
    </div>
    );
  }
});

export default Projects;
