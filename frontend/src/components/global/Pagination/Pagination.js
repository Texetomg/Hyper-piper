import React from 'react'
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.css'

const Pagination = ({
  totalResults,
  pages,
  nextPage,
}) => {

  return (
   totalResults > 20 ? (
    <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={(data) => nextPage(data.selected + 1)}
        containerClassName={style.container}
        pageClassName={style.page}
        activeClassName={style.active}
      />
    ) : null
  )
}

export default Pagination