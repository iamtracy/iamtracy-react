'use strict';

import React from 'react';
import LoadingAnimation from '../loading/Loading';

const Treehouse = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired,
    perScroll: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return {
      cards: [],
      perScroll: this.props.perScroll,
      loading: true
    };
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.source,
      dataTyp: 'json',
      type: 'GET',

      success: data => {
        this.setState({cards: data.badges, initCards: this.props.perScroll, loading: false});
      }
    });
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadCommentsFromServer();
    this.handleScroll();
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function() {
    if ($(window).scrollTop() === $(document).height()-$(window).height()) {
      let cardNumber = this.state.initCards;
      this.setState({initCards: cardNumber + 12});
    }
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
        <div className="card-columns">
          {this.state.cards.map(function(item, index) {
            if (index <= this.state.initCards) {
              return (
                <div className="card" key={index}>
                  <div className="card-block treehouse">
                      <img className="card-img-top treehouse-icon pb-3"
                  src={item.icon_url} alt="Card image cap" />
                    <h4 className="card-title">{item.name}</h4>
                    {item.courses.map(function(course, courseIndex) {
                      return (
                        <p className="card-text" key={courseIndex}>{course.title}</p>
                      );
                    })}
                  </div>
                </div>
              );
            }
            return '';
          }.bind(this))}
        </div>
    );
  }
});

export default Treehouse;
