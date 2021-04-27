import React, { useEffect, useState } from "react";
import axios from "axios";
import InputCheck from "./InputCheck"
import './index.css'
import ShowData from "./components/ShowData"

function App() {
  const [countryNames, setCountryNames] = useState([])
  const [inputCountryNames, setInputCountryNames] = useState("")
  const [showCountryData, setShowCountryData] = useState({})
  const [showWeather, setShowWeather] = useState({})

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountryNames(response.data));
  }, []);

  // side effect: infinite loop
  useEffect(() => {
    axios
      .get(`https://goweather.herokuapp.com/weather/${showCountryData.name}`)
      .then((response) => setShowWeather(response.data));
  }, [showCountryData]);

  const handleOnChange = (event) => {
    setInputCountryNames(event.target.value);
  };


  return (
    <div>
      <h1>Search Any Country</h1> <br/> 
      <p className="belowTitle">Enter a country in the card on the left and information related to that country will be shown in the card on the right.</p> <br/> <br/> <br/> <br/>
     <div className="row">
      <div className="app">
       <span className='text'>Enter country{" "}</span> <br/> <br/>
        <input className="input" value={inputCountryNames} onChange={handleOnChange} />  <br/> 
        <InputCheck setShowCountryData={setShowCountryData} countryNames={countryNames} inputCountryNames={inputCountryNames}/> <br/>  <br/> <br/>
    </div>
    <div className="app">
        <ShowData showCountryData={showCountryData} showWeather= {showWeather} />
    </div>
    </div>
    </div>
  );
}

export default App;
