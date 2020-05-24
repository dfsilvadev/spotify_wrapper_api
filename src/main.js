'user strict';
import { obj } from '../accessToken/token';

export const search = (query, type) => {
	return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, obj).then((data) => data.json());
};

export const searchArtists = (query) => search(query, 'artist');

export const searchAlbums = (query) => search(query, 'album');

export const searchTracks = (query) => search(query, 'track');

export const searchPlaylist = (query) => search(query, 'playlist');
