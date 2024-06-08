import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, Grid, Box, TextField } from '@mui/material';

const Weather = () => {
  // State to store weather data and search query
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch weather data from the API
  const fetchWeatherData = () => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m')
      .then(response => response.json())
      .then(data => setWeatherData(data.hourly.temperature_2m.slice(0, 10)));
  };

  // useEffect hook to fetch weather data when the component mounts
  useEffect(() => {
    fetchWeatherData();
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered weather data based on search query
  const filteredWeatherData = weatherData?.filter(temp => 
    temp.toString().includes(searchQuery)
  );

  return (
    <Container>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        {/* Search bar */}
        <TextField
          label="Search Temperature"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginBottom: '20px' }}
        />
        <Grid container spacing={2}>
          {/* Check if weatherData is available, otherwise show loading message */}
          {filteredWeatherData ? filteredWeatherData.map((temp, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Hour {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Temperature: {temp}°C
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )) : <Typography>Loading...</Typography>}
        </Grid>
      </Box>
    </Container>
  );
};

export default Weather;
