import Activity from './Activity'
import { Box, Center } from '@chakra-ui/react'

function ActivityList( {activities} ) {
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
        {activities.map((activity) => (
          <Activity 
            activity={activity}
          />
        ))}
      </Box>
    )
}

export default ActivityList