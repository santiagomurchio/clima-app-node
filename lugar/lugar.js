const axios = require('axios');

const defaultResponse = require('../google-api-jsons/santa_fe-argentina.json');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);

    let data = response.data;

    if (data.status === 'ZERO_RESULTS') {
        throw new Error(`No results were found for ${direccion} city.`);
    }

    if (data.status === 'OVER_QUERY_LIMIT') {
        console.log('Could not get response from API, using default for Santa Fe.');
        data = defaultResponse;
    }

    let location = data.results[0];
    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }

}

module.exports = {
    getLugarLatLng
}