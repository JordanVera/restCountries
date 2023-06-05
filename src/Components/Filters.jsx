import { useState } from 'react';
import {
  TextField,
  Box,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Autocomplete,
} from '@mui/material';

const Filters = ({
  restCountryData,
  filteredCountryData,
  setFilteredCountryData,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const countryNames = restCountryData.map((country) => country.name.common);

  const handleRegionFilter = (e) => {
    const filteredData = restCountryData.filter(
      (country) => country.region === e.target.value
    );

    setFilteredCountryData(filteredData);
  };

  return (
    <div className="filters">
      <div className="left-element">
        <Autocomplete
          id="autocomplete"
          autoHighlight
          options={countryNames}
          onChange={(e) => setSearchQuery(e.target.value)}
          getOptionLabel={(option) => option}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </div>
      <div className="right-element">
        <Box sx={{ minWidth: 120 }}>
          <FormControl id="filter">
            <InputLabel id="demo-simple-select-label">
              Filter by Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="filter"
              value={filteredCountryData}
              label="Filter by Region"
              onChange={handleRegionFilter}
            >
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Americas">America</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};
export default Filters;
