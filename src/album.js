'user strict';
import { obj, API_URL } from '../configuration/config';
import { toJSON } from './utils';

export const getAlbum = (id) => {
	return fetch(`${API_URL}/albums/${id}`, obj).then(toJSON);
};

export const getAlbums = (ids) => {
	return fetch(`${API_URL}/albums?ids=${ids}`, obj).then(toJSON);
};

export const getAlbumTracks = (id) => {
	return fetch(`${API_URL}/albums/${id}/tracks`, obj).then(toJSON);
};
