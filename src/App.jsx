import { useEffect, useState } from 'react'
//import data from './testData'
import Header from './components/Header';
import Footer from './components/Footer';
import Response from './components/Response';
import ResolutionList from './components/ResolutionList';
import { Box, Flex, Spacer, Heading, Text } from '@chakra-ui/react';
import './App.css'

function App() {
  const [response, setResponse] = useState({});
  const [primaryData, setPrimaryData] = useState([]);
  const [resolutions, setResolutions] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const URL = 'http://localhost:8000/api/resolutions'

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setPrimaryData(data);
      //setResolutions(data);
      // timeout for the purpose of seeing a loading screen
      setTimeout(() => {setLoading(false)}, 800);
    }

    fetchPosts();
    primaryData.forEach((element) => {
      if (element.activity.completed) {
        completed.push(element);
        console.log(`Element ${element.id} is complete!`)
      } else {
        resolutions.push(element);
        console.log(`Element ${element.id} is NOT complete.`)
      }})
    console.log(resolutions)
    console.log(completed)
    setRefresh(false);
  }, [refresh]) //when 'resolutions' changes, fetchPosts repeats

  const getResponse = (newResolution) => {
    getResolutions(newResolution);
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
    setRefresh(true);

    //resolutions.push(newResponse);
  }

  const deleteResolution = (deleteRecord) => {
    // add response to database and return the object
    function deleteRes(index) {
      fetch(`${URL}/${index}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => console.log(data))
      .then(setRefresh(true))
      .catch(error => console.error('Error during fetch:', error));
    }
    deleteRes(deleteRecord);
    //setRefresh(true);
  }

  const updateResolution = (record) => {
    // add response to database and return the object
    function updateRes(record) {
      fetch(`${URL}/${record.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => console.log(data))
      .then(setRefresh(true))
      .catch(error => console.error('Error during fetch:', error));
    }
    updateRes(record);
    //setRefresh(true);
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
            deleteResolution={deleteResolution}
            updateResolution={updateResolution}
          />
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

export default App
