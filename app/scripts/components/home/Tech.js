'use strict';

import React from 'react';

const logos = [
  {img: 'https://cdn.worldvectorlogo.com/logos/react.svg', tip: 'React'},
  {img: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', tip: 'Node.js'},
  {img: 'https://cldup.com/Rg6WLgqccB.svg', tip: 'npm'},
  {img: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg', tip: 'Angular'},
  {img: 'https://cdn.worldvectorlogo.com/logos/bower.svg', tip: 'Bower'},
  {img: 'https://cdn.worldvectorlogo.com/logos/html-5.svg', tip: 'HTML5'},
  {img: 'https://ohdoylerules.com/content/images/css3.svg', tip: 'CSS3'},
  {img: 'https://cdn.worldvectorlogo.com/logos/javascript.svg', tip: 'JavaScript'},
  {img: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/jquery.svg', tip: 'JQuery'},
  {img: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg', tip: 'Bootstrap'},
  {img: 'https://cdn.worldvectorlogo.com/logos/node-sass.svg', tip: 'Sass'},
  {img: 'https://cdn.worldvectorlogo.com/logos/gulp.svg', tip: 'Gulp'}
];

const Tech = React.createClass({
  propTypes: {},
  getInitialState: function() {
    return {
      logos: []
    };
  },

  componentDidMount: function() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },

  render: function() {
    return (
      <div>
        <h3 className="tech">Technologies</h3>
        <div className="flex-container text-center mt-3">
          {logos.map(function(item, index) {
            return (
              <div className="flex-column-2 flex gutter" key={index}>
                <img className="tech-icon" src={item.img}
                data-toggle="tooltip" data-animation="false"
                data-placement="top" title={item.tip}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

export default Tech;
