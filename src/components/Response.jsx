import { useState } from 'react';
import { Box, Text, Button, Input, InputGroup, Heading } from '@chakra-ui/react'

function Response({ getResponse }) {
    // Local state
    const [userResponse, setUserResponse] = useState("");
    const getUserResponse = (event) => {
      setUserResponse(event.target.value);
    }

    const handleClick = (event) => {
      //console.log({userResponse});
      let response={
        activity: {
          name: userResponse,
          completed: false
        }
      };
      console.log(response);
      getResponse(response);
      setUserResponse("");
    }

    return (
      <Box 
        as='section' 
        bg='orange' 
        w={['100vw','100vw','50vw']} 
        h={['35vh','35vh','70vh']}
      >
        <Heading
          align='center'
          p='20px'
        >Let's Make a Resolution</Heading>
        <Box 
          as='section'
          bg='grey.500'
          w={['100vw','100vw','50vw']}
          h={['25vh','25vh','60vh']}
          p='30px'
          overflow='auto'
        >
            <Input 
              variant='outline'
              focusBorderColor='white'
              value={userResponse}
              onChange={getUserResponse}
              placeholder="Let's add a resolution here...">
            </Input>
            <Button onClick={handleClick}>
              Submit
            </Button>
        </Box>
      </Box>
    )
}

export default Response;