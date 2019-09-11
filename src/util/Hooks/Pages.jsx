import React, { useState, useEffect, useContext } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Container from '../../components/Container.jsx'
import styled from 'styled-components'

const Pages = ({
        array,
        itemsPerPage
    }) => {

    const [ numberOfPages, setNumberOfPages ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ start, setStart ] = useState(0);
    const [ end, setEnd ] = useState(0);

    useEffect(() => {
        setNumberOfPages(Math.ceil(array.length / itemsPerPage));
    }, [array, itemsPerPage])

    useEffect(() => {
        //Start should be the index of the item to start the page display at
        
        setStart((currentPage - 1) * itemsPerPage);
        //End should be the index of the item to end the page display at
        setEnd(currentPage * itemsPerPage);
    }, [currentPage, setCurrentPage])

    const ExistingImage = styled.img`
            background-size: 100% 100%;
            width: 150;
            height: 150;
            position: relative;
            margin: 5;
        `;

    console.log("number of Pages" , numberOfPages)
    console.log("current Page" , currentPage)
    console.log("start" , start)
    console.log("end" , end)


    return (
        <Container direction="column" align="center">
            <Container direction="row" wrap="wrap" width="800" >
                {
                    array.slice(start, end).map((item, index) => (
                        <Container id="index" direction="column">
                            <ExistingImage src={item.url} id={index}/>
                            <p>{item.name}</p>
                        </Container>
                    ))
                }
            </Container>
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
        </Container>
    )
    
}

export default Pages;
