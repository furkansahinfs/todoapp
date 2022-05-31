/**
 * The function provides to get a direction to the given location
 * @param latitude : number
 * @param longitude : number
 */
function getDirection(latitude: number, longitude: number) {
	window.open(
		`http://maps.apple.com/?daddr=${latitude},${longitude}`,
		"_blank",
		"noopener,noreferrer",
	);
}

export default getDirection;
