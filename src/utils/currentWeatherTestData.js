const currentWeatherDummyWeather = [
	{
		LocalObservationDateTime: "2020-11-10T00:00:00-05:00",
		EpochTime: 1604984400,
		WeatherText: "Foggy",
		WeatherIcon: 11,
		HasPrecipitation: false,
		PrecipitationType: null,
		IsDayTime: false,
		Temperature: {
			Metric: {
				Value: 13.9,
				Unit: "C",
				UnitType: 17,
			},
			Imperial: {
				Value: 57.0,
				Unit: "F",
				UnitType: 18,
			},
		},
		RealFeelTemperature: {
			Metric: {
				Value: 14.9,
				Unit: "C",
				UnitType: 17,
			},
			Imperial: {
				Value: 59.0,
				Unit: "F",
				UnitType: 18,
			},
		},
		RealFeelTemperatureShade: {
			Metric: {
				Value: 14.9,
				Unit: "C",
				UnitType: 17,
			},
			Imperial: {
				Value: 59.0,
				Unit: "F",
				UnitType: 18,
			},
		},
		RelativeHumidity: 100,
		IndoorRelativeHumidity: 68,
		DewPoint: {
			Metric: {
				Value: 13.9,
				Unit: "C",
				UnitType: 17,
			},
			Imperial: {
				Value: 57.0,
				Unit: "F",
				UnitType: 18,
			},
		},
		Wind: {
			Direction: {
				Degrees: 0,
				Localized: "N",
				English: "N",
			},
			Speed: {
				Metric: {
					Value: 0.0,
					Unit: "km/h",
					UnitType: 7,
				},
				Imperial: {
					Value: 0.0,
					Unit: "mi/h",
					UnitType: 9,
				},
			},
		},
		WindGust: {
			Speed: {
				Metric: {
					Value: 0.0,
					Unit: "km/h",
					UnitType: 7,
				},
				Imperial: {
					Value: 0.0,
					Unit: "mi/h",
					UnitType: 9,
				},
			},
		},
		UVIndex: 0,
		UVIndexText: "Low",
		Visibility: {
			Metric: {
				Value: 1.2,
				Unit: "km",
				UnitType: 6,
			},
			Imperial: {
				Value: 0.75,
				Unit: "mi",
				UnitType: 2,
			},
		},
		ObstructionsToVisibility: "F",
		CloudCover: 20,
		Ceiling: {
			Metric: {
				Value: 3627.0,
				Unit: "m",
				UnitType: 5,
			},
			Imperial: {
				Value: 11900.0,
				Unit: "ft",
				UnitType: 0,
			},
		},
		Pressure: {
			Metric: {
				Value: 1024.0,
				Unit: "mb",
				UnitType: 14,
			},
			Imperial: {
				Value: 30.24,
				Unit: "inHg",
				UnitType: 12,
			},
		},
		PressureTendency: {
			LocalizedText: "Steady",
			Code: "S",
		},
		Past24HourTemperatureDeparture: {
			Metric: {
				Value: 0.0,
				Unit: "C",
				UnitType: 17,
			},
			Imperial: {
				Value: 0.0,
				Unit: "F",
				UnitType: 18,
			},
		},
		ApparentTemperature: {
			Metric: {
				Value: 17.8,
				Unit: "C",
				UnitType: 17,
			},
			Imperial: {
				Value: 64.0,
				Unit: "F",
				UnitType: 18,
			},
		},
		WindChillTemperature: {
			Metric: {
				Value: 13.9,
				Unit: "C",
				UnitType: 17,
			},
			Imperial: {
				Value: 57.0,
				Unit: "F",
				UnitType: 18,
			},
		},
		WetBulbTemperature: {
			Metric: {
				Value: 13.9,
				Unit: "C",
				UnitType: 17,
			},
			Imperial: {
				Value: 57.0,
				Unit: "F",
				UnitType: 18,
			},
		},
		Precip1hr: {
			Metric: {
				Value: 0.0,
				Unit: "mm",
				UnitType: 3,
			},
			Imperial: {
				Value: 0.0,
				Unit: "in",
				UnitType: 1,
			},
		},
		PrecipitationSummary: {
			Precipitation: {
				Metric: {
					Value: 0.0,
					Unit: "mm",
					UnitType: 3,
				},
				Imperial: {
					Value: 0.0,
					Unit: "in",
					UnitType: 1,
				},
			},
			PastHour: {
				Metric: {
					Value: 0.0,
					Unit: "mm",
					UnitType: 3,
				},
				Imperial: {
					Value: 0.0,
					Unit: "in",
					UnitType: 1,
				},
			},
			Past3Hours: {
				Metric: {
					Value: 0.0,
					Unit: "mm",
					UnitType: 3,
				},
				Imperial: {
					Value: 0.0,
					Unit: "in",
					UnitType: 1,
				},
			},
			Past6Hours: {
				Metric: {
					Value: 0.0,
					Unit: "mm",
					UnitType: 3,
				},
				Imperial: {
					Value: 0.0,
					Unit: "in",
					UnitType: 1,
				},
			},
			Past9Hours: {
				Metric: {
					Value: 0.0,
					Unit: "mm",
					UnitType: 3,
				},
				Imperial: {
					Value: 0.0,
					Unit: "in",
					UnitType: 1,
				},
			},
			Past12Hours: {
				Metric: {
					Value: 0.0,
					Unit: "mm",
					UnitType: 3,
				},
				Imperial: {
					Value: 0.0,
					Unit: "in",
					UnitType: 1,
				},
			},
			Past18Hours: {
				Metric: {
					Value: 0.0,
					Unit: "mm",
					UnitType: 3,
				},
				Imperial: {
					Value: 0.0,
					Unit: "in",
					UnitType: 1,
				},
			},
			Past24Hours: {
				Metric: {
					Value: 0.0,
					Unit: "mm",
					UnitType: 3,
				},
				Imperial: {
					Value: 0.0,
					Unit: "in",
					UnitType: 1,
				},
			},
		},
		TemperatureSummary: {
			Past6HourRange: {
				Minimum: {
					Metric: {
						Value: 13.9,
						Unit: "C",
						UnitType: 17,
					},
					Imperial: {
						Value: 57.0,
						Unit: "F",
						UnitType: 18,
					},
				},
				Maximum: {
					Metric: {
						Value: 18.3,
						Unit: "C",
						UnitType: 17,
					},
					Imperial: {
						Value: 65.0,
						Unit: "F",
						UnitType: 18,
					},
				},
			},
			Past12HourRange: {
				Minimum: {
					Metric: {
						Value: 13.9,
						Unit: "C",
						UnitType: 17,
					},
					Imperial: {
						Value: 57.0,
						Unit: "F",
						UnitType: 18,
					},
				},
				Maximum: {
					Metric: {
						Value: 23.3,
						Unit: "C",
						UnitType: 17,
					},
					Imperial: {
						Value: 74.0,
						Unit: "F",
						UnitType: 18,
					},
				},
			},
			Past24HourRange: {
				Minimum: {
					Metric: {
						Value: 10.0,
						Unit: "C",
						UnitType: 17,
					},
					Imperial: {
						Value: 50.0,
						Unit: "F",
						UnitType: 18,
					},
				},
				Maximum: {
					Metric: {
						Value: 23.3,
						Unit: "C",
						UnitType: 17,
					},
					Imperial: {
						Value: 74.0,
						Unit: "F",
						UnitType: 18,
					},
				},
			},
		},
		MobileLink:
			"http://m.accuweather.com/en/us/sanford-nc/27330/current-weather/334826?lang=en-us",
		Link:
			"http://www.accuweather.com/en/us/sanford-nc/27330/current-weather/334826?lang=en-us",
	},
];

export default currentWeatherDummyWeather;
