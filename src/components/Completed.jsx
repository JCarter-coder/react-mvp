import { useState, useEffect } from 'react';
import { 
  Card,
  Text,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ButtonGroup,
} from '@chakra-ui/react'

function Completed({ complete }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

  //if (!resolution.activity.completed) {
    return (
      <>   
        <Card
          bg="white"
          shadow='dark-lg'
          p="20px"
          onClick={onOpen}
        >
            {`${complete.activity.name}`}
        </Card>

        <Modal 
          isOpen={isOpen}
          onClose={onClose}
          colorScheme="facebook"
        >
            <Modal Overlay />
            <ModalContent>
                <ModalHeader>{`Resolution #${complete.id}`}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>{`${complete.activity.name}`}</Text>
                </ModalBody>

                <ModalFooter>
                  <ButtonGroup>
                    <Button
                      shadow='dark-lg'
                      onClick={onClose}>
                      Cancel
                    </Button>
                  </ButtonGroup>
                  
                </ModalFooter>
            </ModalContent>
        </Modal>
      </>
    )
  //}
}

export default Completed