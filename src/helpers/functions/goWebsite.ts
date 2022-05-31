/**
 * The function provides to open the given website if exists
 * @param url : string
 */
function goWebsite(url: string) {
	let gottenUrl: string = url;
	if (gottenUrl) {
		if (!gottenUrl.startsWith("http://") && !gottenUrl.startsWith("https://")) {
			gottenUrl = `https://${gottenUrl}`;
		}

		window.open(gottenUrl, "_blank", "noopener,noreferrer");
	}
}

export default goWebsite;
