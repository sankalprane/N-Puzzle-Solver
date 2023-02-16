import React, {useState} from 'react';
import './Tutorial.css'
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';

export default function Tutorial() {

    const [page, setPage] = useState(1);

    function nextPage() {
        setPage((pageNumber) => {
            pageNumber++;
            console.log(pageNumber);
            return pageNumber;
        })
    }

    function previousPage() {
        setPage((pageNumber) => {
            pageNumber--;
            console.log(pageNumber);
            return pageNumber;
        })
    }

    let displayPage;
    if (page === 1) {
        displayPage = <PageOne nextPage={nextPage}></PageOne>
    } else {
        displayPage = <PageTwo previousPage={previousPage}></PageTwo>
    }

    return (
        displayPage
    )
}