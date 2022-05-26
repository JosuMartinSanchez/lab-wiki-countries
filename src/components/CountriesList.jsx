import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
function CountriesList() {
  //!-----------Estado---------------
  const [countriesList, setCountriesList] = useState([]);
  //!-----------Fase Inicio useEffect ---------------
  useEffect(() => {
    getElement();
  });
  //!-----------funcion llamada a la api ---------------
  const getElement = async () => {
    try {
      const response = await axios.get(
        ' https://ih-countries-api.herokuapp.com/countries '
      );
      setCountriesList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //!-----------Render ---------------
  return (
    <div>
      {countriesList.map((eachCountry) => {
        return (
          <li key={eachCountry.name.common}>
            <Link to={`/${eachCountry.alpha3Code}`}>
              {eachCountry.name.common}
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default CountriesList;
