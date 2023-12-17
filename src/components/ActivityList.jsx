import { Box, Center } from '@chakra-ui/react'

function ActivityList() {
    return (
      <Box 
        as='section' 
        bg='yellowgreen' 
        w={['100vw','100vw','50vw']} 
        h={['35vh','35vh','70vh']}
        p='60px'
        align='center'
      >
        <h3>Inside ActivityList Component</h3>
      </Box>
    )
}

export default ActivityList