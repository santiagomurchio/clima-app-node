const axios = require('axios');

const apiKey = '4d26267d370906e0e54ec27abba03d04';

const getClima = async(lat, lng) => {
    let response =
        await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&units=metrics&appid=${apiKey}`);

    return response.data.list[0].main.temp;
}

module.exports = {
    getClima
}