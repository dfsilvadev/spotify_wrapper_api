import {
    search,
    searchArtists,
    searchAlbums,
    earchTracks,
    searchPlaylist
} from "./search";
import { getAlbum, getAlbums, getAlbumTracks } from "./album";
import { API_URL } from "../configuration/config";

// module.exports = {
// 	search,
// 	searchArtists,
// 	searchAlbums,
// 	earchTracks,
// 	searchPlaylist,
// 	getAlbum,
// 	getAlbums,
// 	getAlbumTracks
// };

export default class SpotifyWrapper {
    constructor(options) {
        this.apiURL = options.apiURL || API_URL;
        this.token = options.token;
    }
    request(url) {
        const headers = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        };
        return fetch(url, headers);
    }
}
