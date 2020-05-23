'user strict';
export const search = (query, type) => {
	const accessToken =
		'BQADZEGzgTiXv0My1CUkoZGSUCfQp0nnRNb-f7bZFrzqs3nzlgD89H7XKFaXWb4kVrIWBHH9sa6N_9U--aBlxnFjnJ0aSmCYcc_-AdoTKeK6_GYgMvG8mnmtCfIP4MJJWAIfhs_I5u3Ya_Q';

	return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	}).then((data) => data.json());
};

export const searchArtists = (query) => search(query, 'artist');

export const searchAlbums = (query) => search(query, 'album');

export const searchTracks = (query) => search(query, 'track');

export const searchPlaylist = (query) => search(query, 'playlist');
