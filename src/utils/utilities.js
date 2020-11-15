export const getAPIKey = () => {
	if (process.env.NODE_ENV !== "production") {
		return process.env.REACT_APP_API_KEY;
	}
	return process.env.REACT_APP_API_KEY_PROD;
};

export const getCityName = async (searchedName, API_KEY) => {
	try {
		const cityNameResponse = await fetch(
			`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${searchedName}`
		);
		return cityNameResponse.json();
	} catch (error) {
		console.log("error", error);
	}
};

export const currentWeatherCondition = async (cityKey, isDetails, API_KEY) => {
	try {
		const weatherData = await fetch(
			`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return weatherData.json();
	} catch (error) {
		console.log(error);
	}
};

export const fiveDailyForecast = async (cityKey, isDetails, API_KEY) => {
	try {
		const forecastData = await fetch(
			`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return forecastData.json();
	} catch (error) {
		console.log(error);
	}
};

export const twelveHoursForecast = async (cityKey, isDetails, API_KEY) => {
	try {
		const twelveHoursForecastData = await fetch(
			`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return twelveHoursForecastData.json();
	} catch (error) {
		console.log(error);
	}
};
