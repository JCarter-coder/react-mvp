/* import Completed from './Completed'
//import Loading from './Loading'
import { 
  Box,
  Center, 
  Heading, 
  VStack, 
  StackDivider,
  Skeleton,
  Text
} from '@chakra-ui/react'

function CompletedList({ completed }) {

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
        >Resolution List</Heading>
        <Box 
          as='section'
          bg='grey.500'
          w={['100vw','100vw','50vw']}
          h={['25vh','25vh','60vh']}
          p='20px'
          overflow='auto'>
          <Skeleton isLoaded={!loading}>
              <VStack
                divider={<StackDivider borderColor='gray.500' />}
                spacing={4}
                p="30px"
                align='stretch'>
                  {completed.map((complete) => (
                    <Completed 
                        key={complete.id}
                        complete={complete}
                    />
                  ))}
              </VStack>
            </Skeleton>
        </Box>
      </Box>
    )
}

export default CompletedList */