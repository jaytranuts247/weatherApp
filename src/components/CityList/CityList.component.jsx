import React from "react";

import City from "../City/City.component";

import "./CityList.styles.css";

const CityList = ({ data, ...props }) => {
	return (
		<div className="city-container">
			<div className="city-list">
				{data.map((dt, index) => {
					console.log(
						`${index} ${dt.LocalizedName}, ${dt.AdministrativeArea.ID}, ${dt.Country.ID}`
					);
					return <City key={dt.Key} data={dt} {...props} />;
				})}
			</div>
		</div>
	);
};

export default CityList;
