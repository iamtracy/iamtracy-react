'use strict';

import React from 'react';

const Treehouse = React.createClass({

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
        const badges = result.badges;
        const badgesArr = [];
        badges.forEach(item => {
            console.log(item); 
            badgesArr.push(item);
        })
        console.log(badgesArr);
      this.setState({
        cards: badgesArr
      });
    }.bind(this));
  },

  render: function() {
    return (
        <div className="card-columns">
          {this.state.cards.map(function(item, index) {
            console.log(item)
            return (
              <div className="card" key={index}>
                <div className="card-block treehouse">
                    <img className="card-img-top treehouse-icon text-center pb-3" 
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

export default Treehouse;
