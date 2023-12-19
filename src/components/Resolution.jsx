import { 
  Container,
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
} from '@chakra-ui/react'

function Resolution({ resolution }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>    
        <Container
          bg="blue.200"
          p="20px"
          onClick={onOpen}
        >
            {`${resolution.activity.name}`}
        </Container>

        <Modal 
          isOpen={isOpen}
          onClose={onClose}
          colorScheme="facebook"
        >
            <Modal Overlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>{`The activity id is ${resolution.id}`}</Text>
                    <Text>{`${resolution.activity.name}`}</Text>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
      </>
    )
}

export default Resolution