import React from "react";

import { getTime } from "../../utils/DateTime";

import "./HourForecast.styles.css";

const images = require.context("../../../public/img", true);

const HourForecast = ({ hourData }) => {
	const hourIcon = hourData.weatherIcon;
	const time = getTime(hourData.Date);
	const iconPhrase = hourData.IconPhrase;

	let image = images("./" + ("0" + hourIcon).slice(-2) + "-s.png");

	return (
		<div className="twelve-hours-forecast__hourly">
			<h3>{time}</h3>
			<img src={image} alt="No Data" />
			<h3 className="five-day-forecast__daily--icon-phrase">{iconPhrase}</h3>
		</div>
	);
};

export default HourForecast;
