import chai, { expect } from "chai";
import SpotfyWrapper from "../src/index";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require("node-fetch");

describe("Album", () => {
    let spotify;
    let stubedFetch;
    let promise;
    beforeEach(() => {
        spotify = new SpotfyWrapper({
            token: "foo"
        });
        stubedFetch = sinon.stub(global, "fetch");
        promise = stubedFetch.returnsPromise({ album: "name" });
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe("smoke tests", () => {
        it("should have getAlbum method", () => {
            expect(spotify.album.getAlbum).to.exist;
        });

        it("should have getAlbumTracks method", () => {
            expect(spotify.album.getTracks).to.exist;
        });
    });

    describe("getAlbum", () => {
        /**
         * verifica se o fetch ocorre
         * verifica se o fetch ocorre com a URL correta
         * verifica se o dado é recebido pela promise
         */

        it("should call fetch method", () => {
            const album = spotify.album.getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it("should call fetch with the correct URL", () => {
            const album = spotify.album.getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy"
            );

            const albumTwo = spotify.album.getAlbum("4aawyAB9vmqN3uQ7FjRGT");
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT"
            );
        });

        it("should return the correct Data from Promise", () => {
            promise.resolves({ album: "name" });
            const album = spotify.album.getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
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
            const albums = spotify.album.getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it("should call fetch with the correct URL", () => {
            const albums = spotify.album.getAlbums([
                "4aawyAB9vmqN3uQ7FjRGT",
                "382ObEPsp2rxGrnsizN5TX"
            ]);
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGT,382ObEPsp2rxGrnsizN5TX"
            );

            const albumsTwo = spotify.album.getAlbums([
                "4aawyAB9vmqN3uQ7FjRGT",
                "382ObEPsp2rxGrnsizN5TX"
            ]);
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGT,382ObEPsp2rxGrnsizN5TX"
            );
        });

        it("should return the correct Data from Promise", () => {
            promise.resolves({ album: "name" });
            const albums = spotify.album.getAlbums([
                "4aawyAB9vmqN3uQ7FjRGT",
                "382ObEPsp2rxGrnsizN5TX"
            ]);
            expect(albums.resolveValue).to.be.eql({ album: "name" });
        });
    });

    describe("getTracks", () => {
        /**
         * verifica se o fetch ocorre
         * verifica se o fetch ocorre com a URL correta
         * verifica se o dado é recebido pela promise
         */

        it("should call fetch method", () => {
            const albumTracks = spotify.album.getTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it("should call fetch with the correct URL", () => {
            const albumTracks = spotify.album.getTracks(
                "4aawyAB9vmqN3uQ7FjRGT"
            );
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT/tracks"
            );

            const albumTracksTwo = spotify.album.getTracks(
                "4aawyAB9vmqN3uQ7FjRGT"
            );
            expect(stubedFetch).to.have.been.calledWith(
                "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT/tracks"
            );
        });

        it("should return the correct Data from Promise", () => {
            promise.resolves({ album: "name" });
            const albumTracks = spotify.album.getTracks(
                "4aawyAB9vmqN3uQ7FjRGT"
            );
            expect(albumTracks.resolveValue).to.be.eql({ album: "name" });
        });
    });
});
