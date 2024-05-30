import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Composant2 from './components/Composant2';
import Composant3 from './components/Composant3';

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
      <BrowserRouter>
        <Routes>
          <Route path='/q2' element={<Composant2 salaries={salaries} />} />
          <Route path='/q3' element={<Composant3 salaries={salaries} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
