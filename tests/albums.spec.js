import chai, { expect } from "chai";
import { getAlbum, getAlbums, getAlbumTracks } from "../src/album";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require("node-fetch");

describe("Album", () => {
    let stubedFetch;
    let promise;
    beforeEach(() => {
        stubedFetch = sinon.stub(global, "fetch");
        promise = stubedFetch.returnsPromise({ album: "name" });
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe("smoke tests", () => {
        it("should have getAlbum method", () => {
            expect(getAlbum).to.exist;
        });

        it("should have getAlbumTracks method", () => {
            expect(getAlbumTracks).to.exist;
        });
    });

    describe("getAlbum", () => {
        /**
         * verifica se o fetch ocorre
         * verifica se o fetch ocorre com a URL correta
         * verifica se o dado é recebido pela promise
         */

        it("should call fetch method", () => {
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it("should call fetch with the correct URL", () => {
            const album = getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy"
            );

            const albumTwo = getAlbum("4aawyAB9vmqN3uQ7FjRGT");
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT"
            );
        });

        it("should return the correct Data from Promise", () => {
            promise.resolves({ album: "name" });
            const album = getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
            expect(album.resolveValue).to.be.eql({ album: "name" });
        });
    });

    describe("getAlbums", () => {
        /**
         * verifica se o fetch ocorre
         * verifica se o fetch ocorre com a URL correta
         * verifica se o dado é recebido pela promise
         */

        it("should call fetch method", () => {
            const albums = getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it("should call fetch with the correct URL", () => {
            const albums = getAlbums([
                "4aawyAB9vmqN3uQ7FjRGT",
                "382ObEPsp2rxGrnsizN5TX"
            ]);
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGT,382ObEPsp2rxGrnsizN5TX"
            );

            const albumsTwo = getAlbums([
                "4aawyAB9vmqN3uQ7FjRGT",
                "382ObEPsp2rxGrnsizN5TX"
            ]);
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGT,382ObEPsp2rxGrnsizN5TX"
            );
        });

        it("should return the correct Data from Promise", () => {
            promise.resolves({ album: "name" });
            const albums = getAlbums([
                "4aawyAB9vmqN3uQ7FjRGT",
                "382ObEPsp2rxGrnsizN5TX"
            ]);
            expect(albums.resolveValue).to.be.eql({ album: "name" });
        });
    });

    describe("getAlbumTracks", () => {
        /**
         * verifica se o fetch ocorre
         * verifica se o fetch ocorre com a URL correta
         * verifica se o dado é recebido pela promise
         */

        it("should call fetch method", () => {
            const albumTracks = getAlbumTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it("should call fetch with the correct URL", () => {
            const albumTracks = getAlbumTracks("4aawyAB9vmqN3uQ7FjRGT");
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT/tracks"
            );

            const albumTracksTwo = getAlbumTracks("4aawyAB9vmqN3uQ7FjRGT");
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT/tracks"
            );
        });

        it("should return the correct Data from Promise", () => {
            promise.resolves({ album: "name" });
            const albumTracks = getAlbumTracks("4aawyAB9vmqN3uQ7FjRGT");
            expect(albumTracks.resolveValue).to.be.eql({ album: "name" });
        });
    });
});
