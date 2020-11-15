var API_KEY;

if (process.env.NODE_ENV !== "production") {
	API_KEY = process.env.REACT_APP_API_KEY;
} else {
	API_KEY = process.env.REACT_APP_API_KEY_PROD;
}

export const getCityName = async (searchedName) => {
	try {
		const cityNameResponse = await fetch(
			`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${searchedName}`
		);
		return cityNameResponse.json();
	} catch (error) {
		console.log("error", error);
	}
};

export const currentWeatherCondition = async (cityKey, isDetails) => {
	try {
		const weatherData = await fetch(
			`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return weatherData.json();
	} catch (error) {
		console.log(error);
	}
};

export const fiveDailyForecast = async (cityKey, isDetails) => {
	try {
		const forecastData = await fetch(
			`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return forecastData.json();
	} catch (error) {
		console.log(error);
	}
};

export const twelveHoursForecast = async (cityKey, isDetails) => {
	try {
		const twelveHoursForecastData = await fetch(
			`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${API_KEY}&details=${isDetails}`
		);
		return twelveHoursForecastData.json();
	} catch (error) {
		console.log(error);
	}
};
