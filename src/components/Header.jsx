import { Box, Heading, Text } from '@chakra-ui/react'

function Header() {
    return (
      <Box 
        as='section' 
        bg='red' 
        w='100vw' 
        h='20vh'
        p='40px'
        textAlign={['left','left','center']}
      >
        <Heading 
          fontWeight='800' 
          fontSize='48' 
          color='#ABC'
        >
          Resolutions
        </Heading>
        <Text>For personal development, your bucket-list, or inspiration when you're bored!</Text>
      </Box>
    )
}

export default Header;