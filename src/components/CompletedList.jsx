import Completed from './Completed'
import { 
  Box,
  Center, 
  Heading, 
  VStack, 
  StackDivider,
  Skeleton,
  Text,
  Flex,
  Button
} from '@chakra-ui/react'

function CompletedList({ loading, completed, setDoneList }) {

  const changeView = (event) => {
      setDoneList(false);
  }

  return (
      <Box 
        as='section' 
        bg='yellowgreen' 
        w={['100vw','100vw','50vw']} 
        h={['35vh','35vh','70vh']}
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
                    align='center'
                    p='20px'
                >Completed List</Heading>
              </Box>
              <Flex
                pr='20px'
                justifyContent='flex-end'>
                <Button
                    onClick={changeView}
                    >See Resolutions</Button>
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

export default CompletedList