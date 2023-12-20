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

function Resolution({ resolution, deleteResolution, updateResolution }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ isChecked, setIsChecked ] = useState(undefined);

    useEffect(() => {
      console.log(isChecked);
    }, [isChecked]);

    const getIsChecked = (e) => {
      console.log(e.target.checked);
      if (isChecked === undefined || isChecked === false) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    }

    const handleDelete = (event) => {
      let response = resolution.id;
      deleteResolution(response);
    }

    const handleUpdate = () => {
      //${resolution.activity.completed}
      let response = resolution
      //response = resolution;
      if (isChecked === true) {
        console.log('true')
        response.completed = true;
        //updateResolution(response)
      } else {
        console.log('No update provided')
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
                      isChecked={isChecked}
                      onChange={getIsChecked}
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