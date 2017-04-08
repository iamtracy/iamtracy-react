'use strict';

import React from 'react';

const Cards = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired,
    perPage: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return {
      cards: [],
      pageCount: 10
    };
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url      : this.props.source,
      data     : {limit: this.props.perPage, offset: this.state.offset},
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({cards: data.badges, pageCount: 5});
      },

      error: (xhr, status, err) => {
        console.error(this.props.source, status, err.toString());
      }
    });
  },

  componentDidMount() {
    this.loadCommentsFromServer();
  },

  render: function() {
    return (
        <div className="card-columns">
          {this.state.cards.map(function(item, index) {
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
          })}
        </div>
    );
  }
});

export default Cards;
