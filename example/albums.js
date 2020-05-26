'use strict';
import SpotfyWrapper from '../src/index';
global.fetch = require('node-fetch');

const spotify = new SpotfyWrapper({
	token: `BQBXd2gITZHyl8wCDFbfp090q_KlqjNgJX27ZveJ77U4b_nD8IKddKnGXIYaIr80VnX0ZBRtW-zNXCLAH2q7qwuPFgA7Nr6MaI_FAdnvQsHzCiXbXp_PhWjFXASigxIqNg97YbC3pLkQcWk`
});
const albums = spotify.search.albums('Aldair Playboy');
albums.then((data) => {
	return data.albums.items.map((item) => console.log(item.name));
});
