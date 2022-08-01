import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather';

const Pais = ({ pais }) => {
    const [res, setRes] = useState([]);
    console.log(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${pais.capital[0]}`)
    useEffect(() => {
        console.log('tiempo')
        axios
          .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${pais.capital[0]}`)
          .then(response => {
            console.log('promise fulfilled')
            console.log(response.data)
            setRes(response.data)
          })
      }, []) 
    
    return (
        <div>
            <h1>{pais.name.common}</h1>
            <div>
                <p>Capital: {pais.capital[0]}</p>
                <p>Population: {pais.population}</p>
                <b><p>languages:</p></b>
                <ul>
                    {Object.values(pais.languages).map(elem => <li key={elem}>{elem}</li>)}
                </ul>
            </div>
            <img src={pais.flags.png} alt="flag" />
            <Weather weather={res} />
        </div>
    )
}

export default Pais