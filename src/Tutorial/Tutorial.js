import React, {useState, useEffect} from 'react';
import './Tutorial.css'
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'

export default function Tutorial() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [page, setPage] = useState(1);

    useEffect(() => {
        onOpen();
    }, []);

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
        displayPage = <PageOne></PageOne>
    } else {
        displayPage = <PageTwo></PageTwo>
    }

    return (
            <>
            <Button onClick={onOpen}>Open Modal</Button>
    
            <Modal closeOnOverlayClick={false} size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>TUTORIAL</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {displayPage}
                    </ModalBody>
    
                    <ModalFooter>
                        <Button colorScheme='teal' onClick={previousPage}>Back</Button>
                        <Button colorScheme='teal' onClick={nextPage}>Next</Button>
                        <Button colorScheme='teal' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}