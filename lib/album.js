'use strict';
'user strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('../configuration/config');

var _utils = require('./utils');

var getAlbum = exports.getAlbum = function getAlbum(id) {
	return fetch(_config.API_URL + '/albums/' + id, _config.obj).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
	return fetch(_config.API_URL + '/albums?ids=' + ids, _config.obj).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
	return fetch(_config.API_URL + '/albums/' + id + '/tracks', _config.obj).then(_utils.toJSON);
};