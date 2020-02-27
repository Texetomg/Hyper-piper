import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({
  totalResults,
  pages,
  nextPage,
}) => {

  return (
   totalResults > 20 ? (
    <div className='container'>
      <div className='row' style={{cursor: "pointer"}}>
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={(data) => nextPage(data.selected + 1)}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    ) : null
  )
}

export default Pagination