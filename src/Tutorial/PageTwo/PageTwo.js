import React, { useEffect } from 'react';
import Puzzle from '../../Puzzle/Puzzle';
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

export default function PageOne({previousPage}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const conf = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];

    useEffect(() => {
        onOpen();
    }, []);

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal closeOnOverlayClick={false} size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>TUTORIAL</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <div className='tutorial-text-1'>The goal of the puzzle is to arrange the numbers in ascending order as shown below</div>
                        <div className='tutorial-modal-body'>
                            <Puzzle grid={conf} />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' onClick={previousPage}>Back</Button>
                        <Button colorScheme='teal' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}