import { nanoid } from "nanoid";

const InputCheck = ({setShowCountryData, countryNames, inputCountryNames}) => {
    const filterCountries = countryNames.filter((element) =>
      element.name.toLowerCase().includes(inputCountryNames.toLowerCase())
    );

    if (filterCountries.length >= 10) {
      return (
        <div>
          <p>Too many matches, please specify another filter</p>
        </div>
      );
    } else if (filterCountries.length === 1) {
      const country = filterCountries[0]
      setShowCountryData(country)
      return <></>
    }
      else {
      return filterCountries.map((element) => (
        <div key={nanoid()}>{element.name}
        <button onClick={()=>{setShowCountryData(element)}}> Show </button> 
        {/* use effect will fire everytime you chnage setShowCountryData */}
        </div>

      ));
    }
  };
  export default InputCheck