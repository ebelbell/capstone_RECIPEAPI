import { useEffect, useState } from 'react'
import './App.css'

//imports
import axios from 'axios'; //receive and send requests to the backend

const App =() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData=async() => {
      try {
        const response=await axios.get('http://localhost:3000/recipe'); //request data from backend
        setData(response.data);
      } catch (err) {

      }
    };

    getData();
  }, []);

  return (
    <div>{data}</div>
  )
}

export default App;