import React from 'react';

const Card = React.createClass({

  propTypes: {
    card: React.PropTypes.object,
    index: React.PropTypes.number
  },

  getInitialState: function() {
    return {card: this.props.card, index: this.props.index};
  },

  render: function() {
    return (
    <div>
      <a href={this.props.card.url} target="_blank">
          <div className="card" key={this.props.index}>
            <img src={this.props.card.img} className="img-fluid card-img-top" alt=""/>
            <a href="#">
              <div className="mask waves-effect waves-light"></div>
            </a>
          <div className="card-block">
            <h4 className="card-title">{this.props.card.title}</h4>
            <p className="card-text">{this.props.card.content}</p>
          </div>
        </div>
      </a>
    </div>
    );
  }
});

export default Card;
