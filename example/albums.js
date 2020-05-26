"use strict";
import SpotfyWrapper from "../src/index";
global.fetch = require("node-fetch");

const spotify = new SpotfyWrapper({
    token: `BQB6OoUYZO7z6_hS8zXXTF3pTrqvHy0I8Z8OMy0CKZzC4NYIPcmITvDOKrePSKyKFO2rlLEWgHBUfh-L84eXt_g5ekMnHBs5MsiDAX5Al9DzDutuK1HF3sORcyR8OGPy5vICmOdkWdesjxc`
});
const albums = spotify.search.albums("Henrique e Juliano");
albums.then(data => {
    return data.albums.items.map(item => console.log(item.name));
});
