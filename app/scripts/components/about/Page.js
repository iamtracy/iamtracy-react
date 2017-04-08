import React from 'react';
import ReactPaginate from 'react-paginate';

const Page = React.createClass({

  propTypes: {
  },

  getInitialState: function() {
    return {
      repos: ['repoArray']
    };
  },

  render: function() {
    return (
        <ReactPaginate previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={<a href="">...</a>}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
    );
  }
});

export default Page;
