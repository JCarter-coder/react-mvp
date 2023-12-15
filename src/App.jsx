import { useState } from 'react'
import Response from './components/Response';
import ActivityList from './components/ActivityList';
import './App.css'

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
      <Response response={response}/>
      <ActivityList />
    </>
  )
}

export default App
