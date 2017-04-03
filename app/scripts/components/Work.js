import React from 'react';

import Repos from './Repos';
import APIS from '../api/apis';

const Work = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <Repos source={APIS.repos} />
    );
  }
});

export default Work;