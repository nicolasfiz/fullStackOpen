const Weather = ({weather}) => {
    console.log("dentro de weather",weather)
    if(Object.keys(weather).length !== 0){
        return (
            <div>
                <p><b>temperature:</b> {weather.current.temperature} Celcius</p>
                <img src={weather.current.weather_icons[0]} alt="temperature"/>
                <p><b>wind:</b>{weather.current.wind_speed} mph direcction {weather.current.wind_dir}</p>
            </div>
        )
    }else{
        return(
            <p>loading...</p>
        )
    }
        
}
export default Weather