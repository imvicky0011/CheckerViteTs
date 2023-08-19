import './App.css';
import FormPage from './components/FormPage'
import ListPage from './components/ListPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import Alert from '@mui/material/Alert'; // Import the Alert component

function App() {

  const [notify, setNotify] = useState(false)
  
  return <div className='mainContainer' >
      {notify && (
        <Alert severity="error" style={{ margin: '20px', padding: '10px' }}>
          Please fill out the form first.
        </Alert>
      )}
  <Router>
    <Routes>

      <Route path="/" element={<FormPage setNotify={setNotify}/>} />
      
      <Route path="/dataList" element={<ListPage setNotify={setNotify} />} />
    
    </Routes>
  </Router>
  </div>
}

export default App;
