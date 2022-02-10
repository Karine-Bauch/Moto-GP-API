require('dotenv').config();
const axios = require('axios');

const apiLocation = {

    cityLatLng: async (location) => {
        const latlngUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.API_MAP_KEY}&location=${location}`;
        const response = await axios.get(latlngUrl);
        const { latLng } = response.data.results[0].locations[0];
        // ou ---> const latLng = response.data.results[0].locations[0].latLng;
        // console.log(latLng);
        return latLng;
    },
};

module.exports = apiLocation;
