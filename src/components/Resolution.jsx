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
} from '@chakra-ui/react'

function Resolution({ resolution, deleteResolution }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDelete = (event) => {
      let response = resolution.id;
      console.log(response);
      deleteResolution(response);
    }

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
                  <ButtonGroup>
                    <Button onClick={handleDelete}>
                      Delete
                    </Button>
                    <Button onClick={onClose}>
                      Save
                    </Button>
                    <Button onClick={onClose}>
                      Cancel
                    </Button>
                  </ButtonGroup>
                  
                </ModalFooter>
            </ModalContent>
        </Modal>
      </>
    )
}

export default Resolution