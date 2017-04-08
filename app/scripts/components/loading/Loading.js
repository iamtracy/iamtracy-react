import React from 'react';

import Loading from 'react-loading-animation';

const LoadingAnimation = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <div>
        <Loading />
      </div>
    );
  }
});

export default LoadingAnimation;
