import { useEffect, useState } from 'react'
//import data from './testData'
import Header from './components/Header';
import Footer from './components/Footer';
import Response from './components/Response';
import ResolutionList from './components/ResolutionList';
import './App.css'
import { Box, Flex, Spacer, Heading, Text } from '@chakra-ui/react';

function App() {
  const [response, setResponse] = useState({});
  const [resolutions, setResolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:8000/api/resolutions');
      const data = await res.json();
      setResolutions(data);
      setLoading(false);
    }

    fetchPosts();
  }, [])

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
          <ResolutionList resolutions={resolutions} />
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

export default App
