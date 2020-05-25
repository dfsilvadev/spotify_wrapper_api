'user strict';
const accessToken =
	'BQAG7jnvbOh4FC-RD10AcIxs7uG1fEWqOVgMANS15zgyc6b1dpbUUsskH6h5vfqeIbbIb7g89gJAcLovwDg9a7ewO53sQHbDu1-yeZN9gcDkhy6aQ5Mo0grEwqWHvdn_fdy9K0-DL5-5yFw';

export const obj = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${accessToken}`
	}
};

export const API_URL = 'https://api.spotify.com/v1';
