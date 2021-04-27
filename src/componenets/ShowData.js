
  const ShowData = ({showCountryData, showWeather}) => {
    if (!!showCountryData.name){
    const country = showCountryData
    const weather = showWeather 
    return( <div>
          <h4>Country Name: {country.name} </h4>
          <h4 className="countryCapital">Capital: {country.capital} </h4><br/>
          <h4>Current Country Temperature: {weather.temperature}</h4>
          <h4>Population: {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(country.population)} <br/></h4>
          <h4>Languages Spoken: {country.languages.map((e) => e.name).join(", ")}<br/></h4>
          <h4>Country Flag: </h4>
          <img src={country.flag} alt="Country Flag" width={300}/>
       
        </div>
    )
    }
    return<></>;
  }

  export default ShowData
  