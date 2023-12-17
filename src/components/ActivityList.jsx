import Activity from './Activity'
import { Box, Center, Heading, VStack, StackDivider } from '@chakra-ui/react'

function ActivityList( {activities} ) {
    return (
      <Box 
        as='section' 
        bg='yellowgreen' 
        w={['100vw','100vw','50vw']} 
        h={['35vh','35vh','70vh']}
        p='60px'
      >
        <Heading>Activity List</Heading>
        <VStack
          divider={<StackDivider borderColor='gray.500' />}
          spacing={4}
          p="30px"
          align='stretch'>
          {activities.map((activity) => (
            <Activity 
                key={activity.id}
                activity={activity}
            />
          ))}
        </VStack>
      </Box>
    )
}

export default ActivityList