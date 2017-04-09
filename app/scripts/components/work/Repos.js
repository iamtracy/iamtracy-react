'use strict';

import React from 'react';

import LoadingAnimation from '../loading/Loading';

const Repos = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      cards: [],
      loading: true
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      return result;
    }).then(function(result) {
      this.setState({
        cards: result,
        loading: false
      });
    }.bind(this));
  },

  getLangColor: function(lang) {
    let hexVal = '';
    if (lang) {
      let color = lang.toLowerCase();
      switch (color) {
      case 'html':
        hexVal = '#e34c26';
        break;
      case 'css':
        hexVal = '#563d7c';
        break;
      case 'javascript':
        hexVal = '#f1e05a';
        break;
      case 'typescript':
        hexVal = '#2b7489';
        break;
      case 'php':
        hexVal = '#4F5D95';
        break;
      default:
        hexVal = '#333';
      }
    }
    return hexVal;
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
            const languageColor = this.getLangColor(item.language);
            return (
              <div className="card" key={index}>
                <a href={item.svn_url} target="_blank">
                  <div className="card-block">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">
                    <i className="fa fa-circle language-color" aria-hidden="true"
                    style={{color: languageColor}}></i> {item.language}</p>
                  </div>
                </a>
              </div>
            );
          }.bind(this))}
        </div>
    );
  }
});

export default Repos;
