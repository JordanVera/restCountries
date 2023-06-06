import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Stack, Chip } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Country = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  async function getCountryData() {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );

    console.log(response.data);
    setData(response.data);
  }

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <>
      <Button
        variant="contained"
        id="backButton"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      <div className="countryContainer">
        <div className="flag">
          <img src={data[0]?.flags.png} alt="flag" id="countryFlag" />
        </div>
        <div>
          <h1 className="name">{data[0]?.name.common}</h1>
          <div className="stats">
            <div className="general">
              <p>
                <span className="bold">Native Name:</span>{' '}
                {data[0]?.name.common}
              </p>
              <p>
                <span className="bold">Population:</span>{' '}
                {data[0]?.population.toLocaleString('en-US')}
              </p>
              <p>
                <span className="bold">Region:</span> {data[0]?.region}
              </p>
              <p>
                <span className="bold">Sub Region:</span> {data[0]?.subregion}
              </p>
              <p>
                <span className="bold">Capital:</span> {data[0]?.name.common}
              </p>
            </div>
            <div className="specific">
              <p>
                <span className="bold">Top Level Domain:</span>{' '}
                {data[0]?.tld[0]}
              </p>
              <p>
                <span className="bold">Currencies:</span> {data[0]?.name.common}
              </p>
              <p>
                <span className="bold">Languages:</span>{' '}
                {data.length > 0 &&
                  Object.values(data[0]?.languages).join(', ')}
              </p>
            </div>
          </div>

          <div className="borders">
            <p className="inline">
              <span className="bold">Border Countries:</span>
            </p>

            <Stack direction="row" spacing={1} className="inline stack">
              {data[0]?.borders?.map((country, i) => (
                <a href={`/country/${country}`} key={i}>
                  <Chip label={country} clickable />
                </a>
              ))}
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};
export default Country;
