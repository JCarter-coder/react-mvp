import { useState } from 'react'
import data from './testData'
import Header from './components/Header';
import Footer from './components/Footer';
import Response from './components/Response';
import ActivityList from './components/ActivityList';
import './App.css'
import { Box, Flex, Spacer, Heading, Text } from '@chakra-ui/react';

function App() {
  const [response, setResponse] = useState({});
  // will update this to retrieve data from a database
  const [activities, setActivities] = useState(data.activities);

  const getResponse = (response) => {
    getActivities(response);
    setResponse({});
  }

  const getActivities = (newResponse) => {
    // add response to database and return the object
    activities.push(newResponse);
  }

  return (
    <>
      <Header />
      <Box 
        as='section' 
        bg='white' 
        w='100vw' 
        h='70vh'
      >
        <Flex 
          align='center' 
          justify='space-around'
          direction={['column','column','row']}
        >
          <Response getResponse={getResponse} />
          <ActivityList activities={activities} />
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

export default App
