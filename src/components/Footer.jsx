import { Box, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function Footer() {
    return (
      <Box 
        as='section' 
        bg='primary' 
        w='100vw' 
        h='10vh'
        p='20px'
        color='white'
      >
        <Text>Git Source Code
          <Link href='https://github.com/JCarter-coder/react-mvp.git' isExternal>
            <ExternalLinkIcon mx='4px' />
          </Link>
        </Text>
      </Box>
    )
}

export default Footer;