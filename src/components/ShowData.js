
  const ShowData = ({showCountryData, showWeather}) => {
    if (!!showCountryData.name){
    const country = showCountryData
    const weather = showWeather 
    return( <div>
          <h1> {country.name} </h1><br/>
          <h4>{country.capital} </h4><br/>
          {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(country.population)} <br/>
          {country.languages.map((e) => e.name).join(", ")}<br/>
          <img src={country.flag} alt="Country Flag" width={300}/>
          <h4>{weather.temperature}</h4>
        </div>
    )
    }
    return<></>;
  }

  export default ShowData
  