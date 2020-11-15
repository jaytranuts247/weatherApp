import React, { Component } from "react";

import "./App.css";
import WeatherBoard from "./components/weatherBoard/weatherBoard.component";
import { getCityName, getAPIKey } from "./utils/utilities";
import CityList from "./components/CityList/CityList.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			cityFound: null,
			isWeatherMode: false,
			searchedName: "",

			cityName: "",
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
		this.setState({
			cityName: cityName,
			isWeatherMode: true,
			currentWeatherData: currentWeatherData,
			fiveDailyForecastData: fiveDailyForecastData,
			twelveHoursForecastData: twelveHoursForecastData,
		});
	};

	handleChange = (e) => {
		this.setState({
			searchedName: e.target.value,
		});
	};

	handleClick = async (e) => {
		e.preventDefault();
		const API_KEY = getAPIKey();
		console.log(API_KEY);
		try {
			const data = await getCityName(this.state.searchedName, API_KEY);
			this.setState({
				cityFound: data,
				isWeatherMode: false,
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<>
				<section className="top-banner">
					<div className="container">
						<h1 className="heading">Weather App</h1>
						<form className="form" onSubmit={this.handleClick}>
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
