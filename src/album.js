'user strict';
export const getAlbum = (id) => {
	const accessToken =
		'BQADZEGzgTiXv0My1CUkoZGSUCfQp0nnRNb-f7bZFrzqs3nzlgD89H7XKFaXWb4kVrIWBHH9sa6N_9U--aBlxnFjnJ0aSmCYcc_-AdoTKeK6_GYgMvG8mnmtCfIP4MJJWAIfhs_I5u3Ya_Q';

	return fetch(`https://api.spotify.com/v1/albums/${id}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	}).then((data) => data.json());
};

export const getAlbumTracks = () => {};
