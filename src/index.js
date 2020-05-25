import {
    search,
    searchArtists,
    searchAlbums,
    earchTracks,
    searchPlaylist
} from "./search";
import album from "./album";
import { API_URL } from "../configuration/config";

export default class SpotifyWrapper {
    constructor(options) {
        this.apiURL = options.apiURL || API_URL;
        this.token = options.token;
        this.album = album.bind(this)();
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
