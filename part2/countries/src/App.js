import axios from 'axios'
import { useState, useEffect } from 'react'
import MostrarResultados from './components/MostrarResultados'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [resultado, setResultado] = useState([])
  const handleBusquedaChange = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }
  useEffect(() => {
    //console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        //console.log('promise fulfilled')
        setResultado(response.data)
      })
  }, [])

  return (
    <>
      find countries <input value={busqueda} onChange={handleBusquedaChange}/>
      <MostrarResultados bus={busqueda} res={resultado}/>
    </>
  );
}

export default App;
