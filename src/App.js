import React, { Component } from "react";

import "./App.css";
import WeatherBoard from "./components/weatherBoard/weatherBoard.component";
import { getCityName } from "./utils/utilities";
import CityList from "./components/CityList/CityList.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			cityFound: null,
			isWeatherMode: false,
			searchedName: "",

			cityName: "",
			// temperatureMetric: null,
			// temperatureImperial: null,
			// weatherText: "",
			// weatherIcon: null,
			currentWeatherData: null,
			fiveDailyForecastData: null,
			twelveHoursForecastData: null,
		};
	}

	setWeatherInfoState = (
		cityName,
		currentWeatherData,
		fiveDailyForecastData,
		twelveHoursForecastData
	) => {
		console.log("setWeatherInfoState called ");
		this.setState({
			cityName: cityName,
			isWeatherMode: true,
			currentWeatherData: currentWeatherData,
			fiveDailyForecastData: fiveDailyForecastData,
			twelveHoursForecastData: twelveHoursForecastData,
		});
	};

	handleChange = (e) => {
		console.log("HandleClick App js Called ");
		this.setState(
			{
				searchedName: e.target.value,
			},
			() => {
				console.log(this.state.searchedName);
			}
		);
	};

	handleClick = async (e) => {
		e.preventDefault();
		try {
			const data = await getCityName(this.state.searchedName);
			this.setState({
				cityFound: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		console.log("render Appjs");
		return (
			<>
				<div className="background-gradient"></div>
				<section className="top-banner">
					<div className="container">
						<h1 className="heading">Weather App</h1>
						<form className="form" onClick={this.handleClick}>
							<input
								name="searchedField"
								type="text"
								placeholder="Enter City, Zip..."
								onChange={this.handleChange}
								autoFocus
							/>
							<button type="submit">SUBMIT</button>
							<span className="msg"></span>
						</form>

						{this.state.cityFound !== null &&
							(this.state.isWeatherMode === false ? (
								<CityList
									data={this.state.cityFound}
									setWeatherInfoState={this.setWeatherInfoState}
								/>
							) : (
								<WeatherBoard {...this.state} />
							))}
					</div>
				</section>
			</>
		);
	}
}

export default App;

/* 
  - AutoCompletion
  - carousel for 12 hours forecast - no need 
	- optimization
	- 
*/
