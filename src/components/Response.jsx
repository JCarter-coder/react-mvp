import { useState } from 'react';
import { Box, Text, Button, Input, InputGroup, Heading, Flex, FormControl } from '@chakra-ui/react'

function Response({ getResponse }) {
    // Local state
    const [userResponse, setUserResponse] = useState("");
    const getUserResponse = (event) => {
      setUserResponse(event.target.value);
    }

    const handleSubmit = (event) => {
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
        <Box
          as='section'
          w={['100vw','100vw','50vw']}
          h={['10vh','10vh','10vh']}
          p='20px'>
          <Heading
            align='left'
            p='20px'
          >Let's Make a Resolution</Heading>
        </Box>
        
        <Box 
          as='section'
          bg='grey.500'
          w={['100vw','100vw','50vw']}
          h={['25vh','25vh','60vh']}
          p='30px'
          overflow='auto'
        >
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input 
                variant='outline'
                focusBorderColor='white'
                mt='20px'
                value={userResponse}
                onChange={getUserResponse}
                placeholder="Let's add a resolution here...">
              </Input>
              <Flex 
                pt="20px"
                justifyContent="flex-end">
                <Button 
                  align='right'
                  onClick={handleSubmit}>
                  Submit
                </Button>
              </Flex>
            </FormControl>
          </form>
            
            
        </Box>
      </Box>
    )
}

export default Response;