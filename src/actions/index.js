import axios from 'axios';

const API_KEY = '2922d50aaa6701b1d26a9260344b76ef';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}