import Activity from './Activity'
import { 
  Box,
  Center, 
  Heading, 
  VStack, 
  StackDivider,
} from '@chakra-ui/react'

function ActivityList( {activities} ) {
    return (
      <Box 
        as='section' 
        bg='yellowgreen' 
        w={['100vw','100vw','50vw']} 
        h={['35vh','35vh','70vh']}
      >
        <Heading 
          align='center'
          p='20px'
        >Activity List</Heading>
        <Box 
          as='section'
          bg='grey.500'
          w={['100vw','100vw','50vw']}
          h={['25vh','25vh','60vh']}
          p='20px'
          overflow='auto'>
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
      </Box>
    )
}

export default ActivityList