'user strict';
export const search = (query, type) => {
	const accessToken =
		'BQB7A8_eGO8t0kpqMGhhYeffUWR72PaUgx3iCu3DdoRMa7IY_6lnQlkjhJ0gTR36NbeAXeN8r8gGfqFBdsqeDtaNp5YRF1yVVSGZn0_EkHQsXWf_viU1KGFFLsn5s_HIWqcURCWvxN6dOwI';

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
