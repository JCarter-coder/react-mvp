import { useState } from 'react';
import { Box, Text, Button, Input } from '@chakra-ui/react'

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
        p='60px'
        align='center'
      >
        <Text>Inside Response Component</Text>
        <Input 
          variant='outline'
          focusBorderColor='white'
          placeholder="Let's add an activity here...">
        </Input>
        <Button>Submit Activity</Button>
      </Box>
    )
}

export default Response;