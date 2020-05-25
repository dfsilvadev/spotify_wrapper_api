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
}
