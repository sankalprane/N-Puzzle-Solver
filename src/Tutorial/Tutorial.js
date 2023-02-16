import React, { useState, useEffect } from 'react';
import './Tutorial.css'
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import PageFive from './PageFive/PageFive';
import PageSix from './PageSix/PageSix';
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

    let displayPage, displayButtons;
    if (page === 1) {
        displayPage = <PageOne></PageOne>
        displayButtons =
            <div className='modal-buttons'>
                <Button colorScheme='teal' onClick={nextPage}>Next</Button>
                <Button colorScheme='teal' onClick={onClose}>Cancel</Button>
            </div>
    } else if (page === 2) {
        displayPage = <PageTwo></PageTwo>
        displayButtons =
        <div className='modal-buttons'>
            <Button colorScheme='teal' onClick={previousPage}>Back</Button>
            <Button colorScheme='teal' onClick={nextPage}>Next</Button>
            <Button colorScheme='teal' onClick={onClose}>Cancel</Button>
        </div>
    } else if (page === 3) {
        displayPage = <PageThree></PageThree>
        displayButtons =
        <div className='modal-buttons'>
            <Button colorScheme='teal' onClick={previousPage}>Back</Button>
            <Button colorScheme='teal' onClick={nextPage}>Next</Button>
            <Button colorScheme='teal' onClick={onClose}>Cancel</Button>
        </div>
    } else if (page === 4) {
        displayPage = <PageFour></PageFour>
        displayButtons =
        <div className='modal-buttons'>
            <Button colorScheme='teal' onClick={previousPage}>Back</Button>
            <Button colorScheme='teal' onClick={nextPage}>Next</Button>
            <Button colorScheme='teal' onClick={onClose}>Cancel</Button>
        </div>
    } else if (page === 5) {
        displayPage = <PageFive></PageFive>
        displayButtons =
        <div className='modal-buttons'>
            <Button colorScheme='teal' onClick={previousPage}>Back</Button>
            <Button colorScheme='teal' onClick={nextPage}>Next</Button>
            <Button colorScheme='teal' onClick={onClose}>Cancel</Button>
        </div>
    } else {
        displayPage = <PageSix></PageSix>
        displayButtons =
        <div className='modal-buttons'>
            <Button colorScheme='teal' onClick={previousPage}>Back</Button>
            <Button colorScheme='teal' isDisabled={true}>Next</Button>
            <Button colorScheme='teal' onClick={onClose}>Finish</Button>
        </div>
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
                        {displayButtons}
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}