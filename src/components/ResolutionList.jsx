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
        <Flex
          align='center'
          justify='space-between'>
          <Box>
            <Heading 
              fontSize={['3xl','3xl','4xl']}
              align='center'
              color='dark'
              p='20px'
            >Resolution List</Heading>
          </Box>
          <Flex
            pr='20px'
            justifyContent='flex-end'>
            <Button
              shadow='base'
              onClick={changeView}
              >See Completed</Button>
          </Flex>

        </Flex>

      </Box>
      
      
      <Box 
        as='section'
        bg='grey.500'
        w={['100vw','100vw','50vw']}
        h={['25vh','25vh','60vh']}
        p='20px'
        overflow='auto'>
        <Skeleton 
          height={['25vh','25vh','60vh']}
          isLoaded={!loading}>
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