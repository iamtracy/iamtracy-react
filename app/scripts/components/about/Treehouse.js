'use strict';

import React from 'react';

const Treehouse = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired,
    perScroll: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return {
      cards: [],
      perScroll: this.props.perScroll
    };
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url      : this.props.source,
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({cards: data.badges, initCards: this.props.perScroll});
      },

      error: (xhr, status, err) => {
        console.error(this.props.source, status, err.toString());
      }
    });
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadCommentsFromServer();
  },

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function() {
    if ($(window).scrollTop() === $(document).height()-$(window).height()){
        console.log("We're at the bottom of the page!!");
        let cardNumber = this.state.initCards;
        this.setState({initCards: cardNumber + 12});
    }
  },

  render: function() {
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
