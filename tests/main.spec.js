import chai, { expect } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylist } from '../src/main';

describe('Spotify Wrapper', () => {
	let fetchedStub;
	let promise;

	beforeEach(() => {
		fetchedStub = sinon.stub(global, 'fetch');
		promise = fetchedStub.returnsPromise();
	});

	afterEach(() => {
		fetchedStub.restore();
	});

	describe('smoke tests', () => {
		it('should exist the search method', () => {
			expect(search).to.exist;
		});
		it('should exist the searchAlbums method', () => {
			expect(searchAlbums).to.exist;
		});
		it('should exist the searchArtists method', () => {
			expect(searchArtists).to.exist;
		});
		it('should exist the searchTracks method', () => {
			expect(searchTracks).to.exist;
		});
		it('should exist the searchPlaylist method', () => {
			expect(searchPlaylist).to.exist;
		});
	});

	describe('generic search', () => {
		it('should call fetch method', () => {
			const artists = search();
			expect(fetchedStub).to.have.been.calledOnce;
		});

		it('should receive the correct url to fetch', () => {
			context('passing one type', () => {
				const artists = search('Incubus', 'artist');
				expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

				const albums = search('Incubus', 'album');
				expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
			});

			context('passing more than one type', () => {
				const artistsAndAlbums = search('Incubus', [ 'artist', 'album' ]);
				expect(fetchedStub).to.have.been.calledWith(
					'https://api.spotify.com/v1/search?q=Incubus&type=artist,album'
				);
			});
		});

		it('should return the JSON Data from the Promise', () => {
			promise.resolves({ body: 'json' });
			const artists = search('Incubus', 'artist');
			expect(artists.resolveValue).to.be.eql({ body: 'json' });
		});
	});

	describe('surcheArtists', () => {
		it('should call fetch funtion', () => {
			const artists = searchArtists('Incubus');
			expect(fetchedStub).to.have.been.calledOnce;
		});

		it('should call fetch with the correct URL', () => {
			const artists = searchArtists('Incubus');
			expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

			const artistsTwo = searchArtists('Muse');
			expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
		});
	});

	describe('surcheAlbums', () => {
		it('should call fetch funtion', () => {
			const albums = searchAlbums('Incubus');
			expect(fetchedStub).to.have.been.calledOnce;
		});

		it('should call fetch with the correct URL', () => {
			const albums = searchAlbums('Incubus');
			expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

			const albumsTwo = searchAlbums('Muse');
			expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
		});
	});

	describe('surcheTracks', () => {
		it('should call fetch funtion', () => {
			const track = searchTracks('Incubus');
			expect(fetchedStub).to.have.been.calledOnce;
		});

		it('should call fetch with the correct URL', () => {
			const track = searchTracks('Incubus');
			expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

			const trackTwo = searchTracks('Muse');
			expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
		});
	});

	describe('surchePlaylist', () => {
		it('should call fetch funtion', () => {
			const playlist = searchPlaylist('Incubus');
			expect(fetchedStub).to.have.been.calledOnce;
		});

		it('should call fetch with the correct URL', () => {
			const playlist = searchPlaylist('Incubus');
			expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

			const playlistTwo = searchPlaylist('Muse');
			expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
		});
	});
});
