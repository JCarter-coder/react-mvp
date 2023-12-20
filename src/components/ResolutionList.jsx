import { useState } from 'react';
//import CompletedList from './CompletedList';
import Resolution from './Resolution';
//import Loading from './Loading'
import { 
  Box,
  Center, 
  Heading, 
  VStack, 
  StackDivider,
  Skeleton,
  Button,
  Flex
} from '@chakra-ui/react';

function ResolutionList({ loading, resolutions, completed, deleteResolution, updateResolution, setDoneList }) {

  const [ showComplete, setShowComplete ] = useState(false)

  const changeShowComplete = (event) => {
    setShowComplete(true)
  }

  const changeView = (event) => {
    setDoneList(true);
  }

  return (
    <Box 
      as='section' 
      bg='yellowgreen' 
      w={['100vw','100vw','50vw']} 
      h={['35vh','35vh','70vh']}
    >
      <Flex
        align='center'
        justify='space-between'>
        <Box>
          <Heading 
            align='center'
            p='20px'
          >Resolution List</Heading>
        </Box>
        <Flex
          pr='20px'
          justifyContent='flex-end'>
          <Button
            onClick={changeView}
            >See Completed</Button>
        </Flex>

      </Flex>
      
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
                {resolutions.map((resolution) => (
                  <Resolution 
                      key={resolution.id}
                      resolution={resolution}
                      deleteResolution={deleteResolution}
                      updateResolution={updateResolution}
                  />
                ))}
            </VStack>
          </Skeleton>
      </Box>
    </Box>
  )
}

export default ResolutionList