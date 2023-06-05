import { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

const Flags = () => {
  const [restCountryData, setRestCountryData] = useState([]);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  async function getRestData() {
    const response = await axios.get('https://restcountries.com/v3.1/all');

    console.log(response.data);
    setRestCountryData(response.data);
  }

  useEffect(() => {
    getRestData();
  }, []);

  return (
    <>
      <div className="filters">
        <div className="left-element">
          <TextField
            id="search"
            label="Search for a country..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton
                  className="submitMessageBtn"
                  // onClick={handleSubmit(onSubmit, onError)}
                >
                  <InputAdornment position="start">
                    <SearchIcon className="searchIcon" />
                  </InputAdornment>
                </IconButton>
              ),
            }}
          />
        </div>
        <div className="right-element">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Filter by Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="filter"
                value={age}
                label="Filter by Region"
                onChange={handleChange}
              >
                <MenuItem value={0}>Africa</MenuItem>
                <MenuItem value={1}>America</MenuItem>
                <MenuItem value={2}>Asia</MenuItem>
                <MenuItem value={3}>Europe</MenuItem>
                <MenuItem value={4}>Oceania</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <div className="cards">
        {restCountryData?.map((country, i) => {
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
                  Region: <span className="normalWeight">{country.region}</span>
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
