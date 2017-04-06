import React from 'react';

const Projects = React.createClass({

  propTypes: {
    cards: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {cards: this.props.cards};
  },

  buildCard: function(title, content, img, index) {
    return (
      <div className="card" key={index}>
          <img src={img} className="img-fluid card-img-top" alt=""/>
          <a href="#">
            <div className="mask waves-effect waves-light"></div>
          </a>
        <div className="card-block">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{content}</p>
        </div>
      </div>
    );
  },

  render: function() {
    return (
    <div className="card-deck">
      {this.props.cards.map(function(item, index) {
        return this.buildCard(item.title, item.content, item.img, index);
      }.bind(this))}
    </div>
    );
  }
});

export default Projects;