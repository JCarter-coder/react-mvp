import { useState, useEffect } from 'react';
import { 
  Container,
  Card,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ButtonGroup,
  Checkbox
} from '@chakra-ui/react'

function Completed({ complete }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

  //if (!resolution.activity.completed) {
    return (
      <>   
        <Card
          bg="blue.200"
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
                    <Button onClick={onClose}>
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