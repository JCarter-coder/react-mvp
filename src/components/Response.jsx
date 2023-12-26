import { useState } from 'react';
import { Box, Button, Input, Heading, Flex, FormControl } from '@chakra-ui/react'

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
// TODO: additional input boxes for goal date, status, etc
    return (
      <Box 
        as='section' 
        bg='secondary' 
        w={['100vw','100vw','50vw']} 
        h={['35vh','35vh','70vh']}
        border='1px'
        borderColor='white'
      >
        <Box
          as='section'
          w={['100vw','100vw','50vw']}
          h={['10vh','10vh','10vh']}
          p='20px'>
          <Heading
            fontSize={['3xl','3xl','4xl']}
            align='left'
            p='20px'
            color='dark'
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
                bg='white'
                mt='20px'
                border='1px'
                borderColor='dark'
                value={userResponse}
                onChange={getUserResponse}
                placeholder="Let's add a resolution here...">
              </Input>
              <Input
                type='date'
                variant='outline'
                focusBorderColor='white'
                bg='white'
                mt='20px'
                border='1px'
                borderColor='dark'>
              </Input>
              <Flex 
                pt="20px"
                justifyContent="flex-end">
                <Button 
                  align='right'
                  shadow='base'
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