import React, { useEffect, useState } from "react";
import axios from "axios";
import InputCheck from "./InputCheck"
import ShowData from "./components/ShowData"

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
      Enter country{" "}
      <input value={inputCountryNames} onChange={handleOnChange} />
      <InputCheck setShowCountryData={setShowCountryData} countryNames={countryNames} inputCountryNames={inputCountryNames}/>
      <ShowData showCountryData={showCountryData} showWeather= {showWeather} />
    </div>
  );
}

export default App;
