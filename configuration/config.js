'user strict';
const accessToken =
	'BQD1nQ4XNg1sDrjEKGb9chF8gGMML_2KDfCs37ZemTbwHZNq8crPQ-UTwJJ8oi7DoNK8hj3CtfGBEMXeKj9vkaTZWNUh6bnZYHuy3jMA-Hp8e_KHJR5hJO_ktjWe7clzfqHnMX4Sa8wvpt8';

export const obj = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${accessToken}`
	}
};

export const API_URL = 'https://api.spotify.com/v1';
