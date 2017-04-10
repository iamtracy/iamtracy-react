import React from 'react';

import LoadingAnimation from '../../loading/Loading';

const Card = React.createClass({

  propTypes: {
    card: React.PropTypes.object
  },

  getInitialState: function() {
    return {card: this.props.card, loading: true};
  },

  componentDidMount: function() {
    this.setState({
        loading: false
      });
  },

  render: function() {
    if (this.state.loading) {
      return (
        <div className="loading-animation">
          <LoadingAnimation />
        </div>
      );
    }
    return (
    <div>
      <a href={this.props.card.url} target="_blank">
          <div className="card">
            <img src={this.props.card.img} className="img-fluid card-img-top" alt=""/>
            <span>
              <div className="mask waves-effect waves-light"></div>
            </span>
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
