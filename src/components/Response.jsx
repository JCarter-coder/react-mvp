import { useState } from 'react';
import { Box, Text, Button, Input, Heading } from '@chakra-ui/react'

function Response({ response, getResponse }) {
    // Local state
    const [userResponse, setUserResponse] = useState("");

    /* const getUserResponse = (info) => {
        getResponse(info);
        setUserResponse({});
    } */

    const recordResponse = (e) => {
        console.log(e.target);
        setUserResponse(e.target.value);
        console.log(userResponse);
        getResponse(userResponse);
        setUserResponse({});
    }

    const handleClick = () => {
        recordResponse();
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
        >Awaiting Your Next Activity</Heading>
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
            placeholder="Let's add an activity here...">
          </Input>
          <Button>Submit Activity</Button>
        </Box>
      </Box>
    )
}

export default Response;