"user strict";
import { HEADERS, API_URL } from "../configuration/config";
import { toJSON } from "./utils";

export const getAlbum = id => {
    return fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);
};

export const getAlbums = ids => {
    return fetch(`${API_URL}/albums?ids=${ids}`, HEADERS).then(toJSON);
};

export const getAlbumTracks = id => {
    return fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);
};
