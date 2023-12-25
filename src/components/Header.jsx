import { Box, Heading, Text } from '@chakra-ui/react'

function Header() {
    return (
      <Box 
        as='section' 
        bg='primary' 
        w='100vw' 
        h='20vh'
        p='40px'
        textAlign={['left','left','center']}
      >
        <Heading 
          fontWeight='800' 
          fontSize={['3xl','3xl','5xl','5xl','6xl']} 
          color='white'
        >
          Resolutions
        </Heading>
        <Text
          fontSize={['md','md','lg','xl','3xl']}
          color='white'
          as='i'>For personal development, inspiration when you're bored, or the ultimate bucket-list!</Text>
      </Box>
    )
}

export default Header;