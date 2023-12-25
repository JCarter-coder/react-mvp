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

    const handleDelete = () => {
      let response = resolution.id;
      setIsChecked(undefined);
      deleteResolution(response);
    }

    const handleUpdate = () => {
      //let response = resolution
      if (isChecked === true) {
        console.log('true')
        resolution.activity.completed = true;
        updateResolution(resolution);
      } else {
        console.log('No update provided')
      }
    }

  // TODO: additional lines displaying the goal date, status, etc
  // Also, make it editable within the modal
  if (!resolution.activity.completed) {
    return (
      <>   
        <Card
          bg="white"
          shadow="dark-lg"
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
                <ModalHeader>{`Resolution #${resolution.id}`}</ModalHeader>
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
                    <Button 
                      bg='highlight'
                      shadow='dark-lg'
                      color='white'
                      onClick={handleDelete}>
                      Delete
                    </Button>
                    <Button 
                      border='1px'
                      borderColor='highlight'
                      shadow='dark-lg'
                      onClick={handleUpdate}>
                      Update
                    </Button>
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
  }
}

export default Resolution