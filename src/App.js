import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [salaries, setSalaries] = useState()

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:8000/salaries')
      return res.data
    }

    getData().then((salaries) => setSalaries(salaries))
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
