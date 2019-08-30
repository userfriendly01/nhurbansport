import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paging = ({
    pagesCount,
    currentPage,
    handlePageClick,
    handlePreviousClick,
    handleNextClick
}) => {
    return(
        <Pagination>
            <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink first href="#" onClick={e => handlePageClick(e, 0)}></PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous href="#" onClick={handlePreviousClick}></PaginationLink>
            </PaginationItem>
                {
                    [...Array(pagesCount)].map((page, i) => (
                        <PaginationItem active={i === currentPage} key={i}>
                            <PaginationLink onClick={e => handlePageClick(e, i)} href="#">
                            {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))
                }
            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    )
    
}

export default Paging;