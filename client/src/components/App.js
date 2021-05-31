import React from 'react';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';

function App() {
  const [id, setId] = useLocalStorage('id')
return (

  id ? <Dashboard/> : <Login onIdSubmit={setId} /> 


)
}


export default App;
