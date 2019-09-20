import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { 
    Container, 
    Image 
} from '../../components';

const ImagePagination = ({
        array,
        parentCallBack
    }) => {

    const [ numberOfPages, setNumberOfPages ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const itemsPerPage = 6;
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;

    useEffect(() => {
        setNumberOfPages(Math.ceil(array.length / itemsPerPage));
    }, [array])

    console.log(array)

    return (
        <Container direction="column" align="center" margin="0">
            <Container direction="row" wrap="wrap" width="650" margin="0">
                {
                    array.slice(start, end).map((item, index) => (
                        <Container id="index" direction="column" align="center">
                            <div onClick={() => parentCallBack(item.url)}>
                                <Image cursor="pointer" url={item.url} height="150" width="150" margin="5" upload={false} id={index}/>
                                <p>{item.name}</p>
                            </div>
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

export default ImagePagination;
