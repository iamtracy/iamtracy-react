'use strict';

import React from 'react';

const Repos = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    let repoArray = [];
    $.get(this.props.source, result => {
        for (let i = 0; i < result.length; i += 1) {
          repoArray.push(result[i])
        }
    });
    return {
      repos: ['repoArrasdcadsy']
    };
  },

  render: function() {
    return (
          <div className="flex-column-12 flex-gutter">
              {/*{this.state.repos.map(function(item, index) {
                return (<div className="card" key={index}>
                            <div className="card-block" key={index}>
                                {item}
                            </div>
                        </div>);
              })}*/}
            </div>
        );
  }
});

export default Repos;
