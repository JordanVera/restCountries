import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Filters from './Filters';

const Flags = () => {
  const [restCountryData, setRestCountryData] = useState([]);
  const [filteredCountryData, setFilteredCountryData] = useState([]);

  async function getRestData() {
    const response = await axios.get('https://restcountries.com/v3.1/all');

    console.log(response.data);
    setRestCountryData(response.data);
    setFilteredCountryData(response.data);
  }

  useEffect(() => {
    getRestData();
  }, []);

  return (
    <>
      <Filters
        restCountryData={restCountryData}
        filteredCountryData={filteredCountryData}
        setFilteredCountryData={setFilteredCountryData}
      />
      <div className="cards">
        {filteredCountryData
          ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country, i) => {
            return (
              <Card
                sx={{ maxWidth: 264, width: '100%' }}
                className="card"
                key={i}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={country.flags.png}
                  title="green iguana"
                />
                <CardContent>
                  <h3 className="countryName">{country.name.common}</h3>
                  <h4 className="countryFacts">
                    Population:{' '}
                    <span className="normalWeight">
                      {country.population.toLocaleString('en-US')}
                    </span>
                  </h4>
                  <h4 className="countryFacts">
                    Region:{' '}
                    <span className="normalWeight">{country.region}</span>
                  </h4>
                  <h4 className="countryFacts">
                    Capital:{' '}
                    <span className="normalWeight">{country.capital}</span>
                  </h4>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default Flags;
