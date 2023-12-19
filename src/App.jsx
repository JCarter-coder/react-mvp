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

  const URL = 'http://localhost:8000/api/resolutions'

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setResolutions(data);
      setTimeout(() => {setLoading(false)}, 800);
    }

    fetchPosts();
  }, [])

  const getResponse = (response) => {
    getResolutions(response);
    setResponse({});
  }

  const getResolutions = (newResponse) => {
    // add response to database and return the object
    function setRecord(data) {
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error during fetch:', error));
    }
    setRecord(newResponse);

    //resolutions.push(newResponse);
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
          <ResolutionList 
            loading={loading}
            resolutions={resolutions}
          />
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

export default App
