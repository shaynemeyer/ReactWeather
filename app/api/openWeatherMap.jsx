var axios = require('axios');

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/forecast?&units=imperial&APPID=${process.env.OPENWEATHERKEY}`;

export function getTemp(location) {
	var encodedLocation = encodeURIComponent(location);
	var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

	return axios.get(requestUrl).then(function (res) {
		if (res.data.cod !== '200') {
			throw new Error(res.data.message);
		} else {
			return res.data.list[0].main.temp;
		}
	}, function (res) {
		throw new Error(res.data.message);
	});
}
