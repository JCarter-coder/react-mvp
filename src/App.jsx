import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Response from './components/Response';
import ActivityList from './components/ActivityList';
import './App.css'
import { Box, Flex, Spacer, Heading, Text } from '@chakra-ui/react';

function App() {
  const [response, setResponse] = useState({});
  const [activities, setActivities] = useState([]);

  const getResponse = (response) => {
    getActivities(response);
    setResponse({});
  }

  const getActivities = (activity) => {
    activities.push(activity);
  }

  return (
    <>
      <Box 
        as='section' 
        bg='red' 
        w='100vw' 
        h='20vh'
      >
        <Heading 
          fontWeight='800' 
          fontSize='48' 
          color='#ABC'
        >
          Resolutions
        </Heading>
        <Text>For personal development, a bucket-list, or when you're bored!</Text>
      </Box>
      <Box 
        as='section' 
        bg='white' 
        w='100vw' 
        h='70vh'
      >
        <Flex 
          align='center' 
          justify='space-around'
        >
          <Response />
          <ActivityList />
        </Flex>
      </Box>
      <Box 
        as='section' 
        bg='blue' 
        w='100vw' 
        h='10vh'
      >
        This is a box
      </Box>
    </>
  )
}

export default App
