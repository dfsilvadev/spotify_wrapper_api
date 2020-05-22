import chai, { expect } from "chai";

import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require("node-fetch");

import {
    search,
    searchAlbums,
    searchArtists,
    searchTracks,
    searchPlaylist
} from "../src/main";

describe("Spotify Wrapper", () => {
    describe("smoke tests", () => {
        it("should exist the search method", () => {
            expect(search).to.exist;
        });
        it("should exist the searchAlbums method", () => {
            expect(searchAlbums).to.exist;
        });
        it("should exist the searchArtists method", () => {
            expect(searchArtists).to.exist;
        });
        it("should exist the searchTracks method", () => {
            expect(searchTracks).to.exist;
        });
        it("should exist the searchPlaylist method", () => {
            expect(searchPlaylist).to.exist;
        });
    });

    describe("generic search", () => {
        it("should call fetch method", () => {
            const fetchedStub = sinon.stub(global, "fetch");
            const artists = search();

            expect(fetchedStub).to.have.been.calledOnce;
        });
    });
});
