global.fetch = require('node-fetch');
import { searchAlbums } from '../src/main';

const albums = searchAlbums('Henrique e Juliano');
albums.then((data) => data.albums.items.map((item) => console.log(item.name)));
