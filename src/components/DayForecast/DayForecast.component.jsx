import React from "react";
import { getDate } from "../../utils/DateTime";

import "./DayForecast.styles.css";

const images = require.context("../../../public/img", true);

const DayForecast = ({ dayData }) => {
	const Date = getDate(dayData.Date);
	const iconPhrase = dayData.Day.IconPhrase;
	const dayIcon = dayData.Day.Icon;

	let image = images("./" + ("0" + dayIcon).slice(-2) + "-s.png");

	return (
		<div className="five-day-forecast__daily">
			<h3>{Date}</h3>
			<img src={image} alt="No Data" />
			<h3 className="five-day-forecast__daily--icon-phrase">{iconPhrase}</h3>
		</div>
	);
};

export default DayForecast;
