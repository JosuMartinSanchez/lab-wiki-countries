import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails() {
  const [cuntryDetail, setCountryDetail] = useState([]);
  const { countriesDetail } = useParams();

  console.log(countriesDetail);

  //!-----------funcion llamada a la api ---------------
  const getElement = async () => {
    try {
      const response = await axios.get(
        ` https://ih-countries-api.herokuapp.com/countries/${countriesDetail}  `
      );
      setCountryDetail(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //!-----------Fase Inicio useEffect ---------------
  useEffect(() => {
    getElement();
  }, []);

  //!-----------Fase Inicio useEffect ---------------
  useEffect(() => {
    getElement();
  }, [countriesDetail]);

  return (
    <div>
      <p>{cuntryDetail.region}</p>
      <p>{cuntryDetail.subregion}</p>
      <p>{cuntryDetail.area}</p>
      <p>{cuntryDetail.capital}</p>
      <p> {cuntryDetail.updatedAt}</p>
    </div>
  );
}

export default CountryDetails;
