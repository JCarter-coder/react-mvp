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
} from '@chakra-ui/react'

function Resolution({ resolution }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>    
        <Card
          bg="blue.200"
          p="20px"
          onClick={onOpen}
        >
            {`${resolution.activity.name}`}
        </Card>

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
                    <Text>{`${resolution.activity.name}`}</Text>
                    <Text>{`Completed: ${resolution.activity.completed}`}</Text>
                </ModalBody>

                <ModalFooter>
                  <Button onClick={onClose}>
                    Delete
                  </Button>
                  <Button onClick={onClose}>
                    Save
                  </Button>
                  <Button onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
      </>
    )
}

export default Resolution