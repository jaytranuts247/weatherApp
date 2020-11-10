import React from "react";
import "./weatherBoard.styles.css";

import { dateTime } from "../../utils/DateTime";
import DayForecast from "../DayForecast/DayForecast.component";
import { twelveHoursForecast } from "../../utils/utilities";

const images = require.context("../../../public/img", true);

const WeatherBoard = ({
	cityName,
	currentWeatherData,
	fiveDailyForecastData,
	twelveHoursForecastData,
}) => {
	// const temperatureMetric = currentWeatherData[0].Temperature.Metric.Value;
	console.log("fiveDailyForecastData", fiveDailyForecastData);
	const temperatureImperial = currentWeatherData[0].Temperature.Imperial.Value;
	const weatherText = currentWeatherData[0].WeatherText;
	const weatherIcon = currentWeatherData[0].WeatherIcon;

	const humidity = currentWeatherData[0].RelativeHumidity;

	const wind = currentWeatherData[0].Wind.Speed.Imperial.Value;
	// const windGust = currentWeatherData[0].WindGust.Speed.Imperial.Value; // Unit: mile/h
	const pressure = currentWeatherData[0].Pressure.Imperial.Value; // Unit: inHg
	const visibility = currentWeatherData[0].Visibility.Imperial.Value; // mile

	const airQuality =
		fiveDailyForecastData.DailyForecasts[0].AirAndPollen[0].Category;
	console.log("twelveHoursForecastData", twelveHoursForecastData);

	let image = images("./" + ("0" + weatherIcon).slice(-2) + "-s.png");

	return (
		<div className="weather-board">
			<div className="cur-con-weather-body">
				<div className="cur-con-weather-card__panel">
					<div className="cur-cont-weather-card__panel--time">
						<h2 className="cur-con">Current Condition</h2>
						<h2 className="time">{dateTime()}</h2>
					</div>
					<hr />
					<div className="forecast-container">
						<div className="city-name">
							<h2>{cityName}</h2>
						</div>
						<div className="weather-info-container">
							<div className="city-weather-icon">
								<img src={image} alt="No Data Found" />
								<h2 className="weather-text">{weatherText}</h2>
							</div>
							<div className="temp-container">
								<div className="temp">
									{temperatureImperial}&deg;
									<span className="after-temp">F</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cur-con-weather-card__panel--details-container">
					<ul className="cur-con-weather-card__panel--list">
						<li className="cur-con-weather-card__panel--item">
							<div>
								<span className="item-name">Air Quality</span>
							</div>
							<div>
								<span className="item-value" id="airQuality">
									{airQuality ? airQuality : "No Data"}
								</span>
							</div>
						</li>
						<hr />
						<li className="cur-con-weather-card__panel--item">
							<div>
								<span className="item-name">Wind</span>
							</div>
							<div>
								<span className="item-value" id="wind">
									{wind}
								</span>
								<span className="item-unit"> mile/h</span>
							</div>
						</li>
						<hr />
						<li className="cur-con-weather-card__panel--item">
							<div>
								<span className="item-name">Humidity</span>
							</div>
							<div>
								<span className="item-value" id="humidity">
									{humidity}
								</span>
							</div>
						</li>
						<hr />
						<li className="cur-con-weather-card__panel--item">
							<div>
								<span className="item-name">Pressure</span>
							</div>
							<div>
								<span className="item-value" id="pressure">
									{pressure}
								</span>
								<span className="item-unit"> inHg</span>
							</div>
						</li>
						<hr />
					</ul>
				</div>
				<div className="five-days-forecast__panel">
					{fiveDailyForecastData.DailyForecasts.map((day) => (
						<DayForecast key={day.Date} dayData={day} />
					))}
				</div>
				<div className="twelve-hours-forecast__panel">
					{twelveHoursForecastData.map((hourData) => (
						<twelveHoursForecast key={hourData.DateTime} hourData={hourData} />
					))}
				</div>
			</div>
		</div>
	);
};

export default WeatherBoard;
