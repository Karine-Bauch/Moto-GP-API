// require('dotenv').config();
// const axios = require('axios');

// const apiWweather = {

//     weatherCity: async (lat, lng, date) => {
//         const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lng}&dt=${date}&appid=${process.env.API_WEATHER_KEY}`;

//         const response = await axios.get(weatherUrl);
//         const todayWeather = response.data.current.weather;
//         // console.log(response.data.current);
//         return todayWeather;
//     },
// };

// // apiWweather.cityWeather(30.264979, -97.746598, '2021-10-02T22:00:00.000Z');

// module.exports = apiWweather;
