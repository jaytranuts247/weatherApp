import { API_KEY } from "../apiKey";

export const getCityName = async (searchedName) => {
	try {
		const cityNameResponse = await fetch(
			`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${searchedName}`
		);
		const cityList = cityNameResponse.json();
		console.log("cityList", cityList);
		return cityList;
	} catch (error) {
		console.log("error", error);
	}
};

export const currentWeatherCondition = async (cityKey, isDetails) => {
	try {
		const weatherData = await fetch(
			`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return weatherData.json();
	} catch (error) {
		console.log(error);
	}
};

export const fiveDailyForecast = async (cityKey, isDetails) => {
	try {
		const forecastData = await fetch(
			`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return forecastData.json();
	} catch (error) {
		console.log(error);
	}
};

export const twelveHoursForecast = async (cityKey, isDetails) => {
	try {
		const twelveHoursForecastData = await fetch(
			`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return twelveHoursForecastData.json();
	} catch (error) {
		console.log(error);
	}
};
