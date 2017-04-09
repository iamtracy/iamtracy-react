'use strict';

import React from 'react';

const logos = [
  {img: 'https://cdn.worldvectorlogo.com/logos/react.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'},
  {img: 'https://cldup.com/Rg6WLgqccB.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/bower.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/html-5.svg'},
  {img: 'https://ohdoylerules.com/content/images/css3.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'},
  {img: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/jquery.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/node-sass.svg'},
  {img: 'https://cdn.worldvectorlogo.com/logos/gulp.svg'}
];

const Tech = React.createClass({
  propTypes: {},
  getInitialState: function() {
    return {
      logos: []
    };
  },
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div>
        <h3 className="tech">Technologies</h3>
        <div className="flex-container text-center mt-3">
          {logos.map(function(item, index) {
            return (
              <div className="flex-column-2 flex gutter" key={index}>
                <img className="tech-icon" src={item.img} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

export default Tech;
