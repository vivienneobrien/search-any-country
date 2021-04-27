import React, { useEffect, useState } from "react";
import axios from "axios";
import InputCheck from "./InputCheck"
<<<<<<< HEAD
import ShowData from "./componenets/ShowData"
import './index.css'

=======
import ShowData from "./components/ShowData"
>>>>>>> 772172e7253db95defa85f5c48154d47834d1204

function App() {
  const [countryNames, setCountryNames] = useState([])
//	cosole.log("​App -> countryNames", countryNames)
  const [inputCountryNames, setInputCountryNames] = useState("")
	// console.log("​App -> inputCountryNames", inputCountryNames)
  const [showCountryData, setShowCountryData] = useState({})
	// console.log("​App -> showCountryData", showCountryData)
  const [showWeather, setShowWeather] = useState({})
	// console.log("​App -> showWeather", showWeather)

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
