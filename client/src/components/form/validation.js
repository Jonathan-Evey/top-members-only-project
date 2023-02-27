export const isSymbolsError = (value) => {
	if (value) {
		let filteredString = value.match(/[\p{L}\p{N}\s]/gu).join('');
		if (filteredString === value) {
			return false;
		} else {
			return true;
		}
	}
};
