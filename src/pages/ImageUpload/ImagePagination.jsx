import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Wrapper } from '../../components';
import styled from 'styled-components';

const AvailableImage = styled.img`
    width: 150px;
    height: 150px;
    margin: 5px;
    &:hover {
        cursor: pointer;
    }
`;

const StyledWrapper = styled(Wrapper)`
    flex-wrap: wrap;
    width: 800px;
    margin-top: 10px;
`;

const ImagePagination = ({
        array,
        parentCallBack
    }) => {

    const [ numberOfPages, setNumberOfPages ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const itemsPerPage = 10;
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;

    useEffect(() => {
        setNumberOfPages(Math.ceil(array.length / itemsPerPage));
    }, [array])

    return (
        <Wrapper direction="column" align="center">
            <StyledWrapper>
                {
                    array.slice(start, end).map((item, index) => (
                        <Wrapper id="index" direction="column" align="center">
                            <div onClick={() => parentCallBack(item.url)}>
                                <AvailableImage src={item.url} id={index} />
                            </div>
                        </Wrapper>
                    ))
                }
            </StyledWrapper>
            <Pagination>
                <PaginationItem disabled={currentPage <= 1}>
                    <PaginationLink first onClick={() => setCurrentPage(1)}></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous onClick={() => setCurrentPage( currentPage - 1 )}></PaginationLink>
                </PaginationItem>
                    {
                        [...Array(numberOfPages)].map((page, i) => (
                            <PaginationItem active={i === currentPage - 1} key={i + 1}>
                                <PaginationLink onClick={() => setCurrentPage(i + 1)}>
                                    { i + 1 }
                                </PaginationLink>
                            </PaginationItem>
                        ))
                    }
                <PaginationItem>
                    <PaginationLink next onClick={() => setCurrentPage(currentPage + 1)}/>
                </PaginationItem>
                <PaginationItem disabled={currentPage == numberOfPages}>
                    <PaginationLink last onClick={() => setCurrentPage(numberOfPages)}></PaginationLink>
                </PaginationItem>
            </Pagination>
        </Wrapper>
    )
    
}

export default ImagePagination;
