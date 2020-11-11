import React from "react";

import { getTime } from "../../utils/DateTime";

import "./HourForecast.styles.css";

const images = require.context("../../../public/img", true);

const HourForecast = ({ hourData }) => {
	const hourIcon = hourData.WeatherIcon;
	const time = getTime(hourData.DateTime);
	const iconPhrase = hourData.IconPhrase;

	let image = images("./" + ("0" + hourIcon).slice(-2) + "-s.png");

	return (
		<div className="twelve-hours-forecast__hourly">
			<h3>{time}</h3>
			<img src={image} alt="No Data" />
			<h3 className="twelve-hours-forecast__hourly--icon-phrase">
				{iconPhrase}
			</h3>
		</div>
	);
};

export default HourForecast;
