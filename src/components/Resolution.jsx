import { useState } from 'react';
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

function Resolution({ resolution, deleteResolution }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ isChecked, setIsChecked ] = useState(false);

    const handleDelete = (event) => {
      let response = resolution.id;
      deleteResolution(response);
    }

    const handleUpdate = (event) => {
      //${resolution.activity.completed}
      let response = {}
      response.id = resolution.id;
      if (event === true) {
        console.log('true')
      } else {
        console.log('false')
      }
      //response.activity.completed = resolution.activity.completed
      console.log(response);
      //updateResolution()
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
                    <Checkbox 

                    >Completed
                    </Checkbox>
                </ModalBody>

                <ModalFooter>
                  <ButtonGroup>
                    <Button onClick={handleDelete}>
                      Delete
                    </Button>
                    <Button onClick={handleUpdate}>
                      Update
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