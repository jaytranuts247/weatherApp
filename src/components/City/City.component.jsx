import React from "react";

import {
	currentWeatherCondition,
	fiveDailyForecast,
	twelveHoursForecast,
	getAPIKey,
} from "../../utils/utilities";

import "./City.styles.css";

const City = ({ data, setWeatherInfoState }) => {
	const API_KEY = getAPIKey();
	const handleClick = async (data) => {
		try {
			const cityKey = data.Key;
			const cityName = data.LocalizedName;

			const currentWeatherData = await currentWeatherCondition(
				cityKey,
				true,
				API_KEY
			);
			const fiveDailyForecastData = await fiveDailyForecast(
				cityKey,
				true,
				API_KEY
			);
			const twelveHoursForecastData = await twelveHoursForecast(
				cityKey,
				true,
				API_KEY
			);

			setWeatherInfoState(
				cityName,
				currentWeatherData,
				fiveDailyForecastData,
				twelveHoursForecastData
			);
			// setCityName(data.LocalizedName);
			// setWeatherInfo(weatherData);
			// setDailyForecast(fiveDailyForecastData);
			// setHoursForecast(twelveHoursForecastData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="city-location" onClick={() => handleClick(data)}>
			<h2>
				{data.LocalizedName}, {data.AdministrativeArea.ID}, {data.Country.ID}
			</h2>
		</div>
	);
};

export default City;
