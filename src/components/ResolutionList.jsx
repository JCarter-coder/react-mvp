import Resolution from './Resolution'
import Loading from './Loading'
import { 
  Box,
  Center, 
  Heading, 
  VStack, 
  StackDivider,
} from '@chakra-ui/react'

function ResolutionList({ loading, resolutions }) {
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
        <VStack
          divider={<StackDivider borderColor='gray.500' />}
          spacing={4}
          p="30px"
          align='stretch'>
          {loading ? 
            <Loading /> : 
            resolutions.map((resolution) => (
              <Resolution 
                  key={resolution.id}
                  resolution={resolution}
              />
            ))
          }
        </VStack>
        </Box>
      </Box>
    )
}

export default ResolutionList