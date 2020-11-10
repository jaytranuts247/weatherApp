export const dateTime = () => {
	let currentTime = new Date();
	let h = currentTime.getHours();
	let m = currentTime.getMinutes();

	const ampm = h >= 12 ? "PM" : "AM";
	const hampm = h >= 12 ? h - 12 : h;

	const HoursAndMinutes = `${hampm} : ${("0" + m).slice(-2)}  ${ampm}`;
	return HoursAndMinutes;
};

export const getDate = (date) => date.slice(5, 10);

export const getTime = (time) => time.slice(11, 15);
