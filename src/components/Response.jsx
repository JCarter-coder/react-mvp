import { useState } from 'react';
import { Box } from '@chakra-ui/react'

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
        w='50vw' 
        h='70vh'
      >
        <h3>Inside Response Component</h3>
      </Box>
    )
}

export default Response;