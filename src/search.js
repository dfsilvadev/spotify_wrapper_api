'use strict';
import { obj, API_URL } from '../configuration/config';
import { toJSON } from './utils';

export const search = (query, type) => {
	return fetch(`${API_URL}/search?q=${query}&type=${type}`, obj).then(toJSON);
};

export const searchArtists = (query) => search(query, 'artist');

export const searchAlbums = (query) => search(query, 'album');

export const searchTracks = (query) => search(query, 'track');

export const searchPlaylist = (query) => search(query, 'playlist');
