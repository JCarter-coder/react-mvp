import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Header />
      <div id="main-container">
        <Response response={response} getResponse={getResponse}/>
        <ActivityList />
      </div>
      <Footer />
    </>
  )
}

export default App
