import chai, { expect } from "chai";
import SpotifyWrapper from "../src/index";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require("node-fetch");

describe("Spotify Wrapper Library", () => {
    it("should create an instace of SpotifyWrapper", () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
    });

    it("should receive apiURL as an option", () => {
        let spotify = new SpotifyWrapper({
            apiURL: "blablabla"
        });

        expect(spotify.apiURL).to.be.equal("blablabla");
    });

    it("should use the default apiURL if not provide", () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify.apiURL).to.be.equal("https://api.spotify.com/v1");
    });

    it("should receive token as an option", () => {
        let spotify = new SpotifyWrapper({
            token: "foo"
        });
        expect(spotify.token).to.be.equal("foo");
    });

    describe("request method", () => {
        let stubedFetch;
        let promise;

        beforeEach(() => {
            stubedFetch = sinon.stub(global, "fetch");
            promise = stubedFetch.returnsPromise({ album: "name" });
        });

        afterEach(() => {
            stubedFetch.restore();
        });

        it("should have request method", () => {
            let spotify = new SpotifyWrapper({});
            expect(spotify.request).to.exist;
        });

        it("should call fetch when request", () => {
            let spotify = new SpotifyWrapper({
                token: "foo"
            });
            spotify.request("url");

            expect(stubedFetch).to.have.been.calledOnce;
        });

        it("should call fetch with right url passed", () => {
            let spotify = new SpotifyWrapper({
                token: "foo"
            });
            spotify.request("url");

            expect(stubedFetch).to.have.been.calledWith("url");
        });

        it("should call fetch with right headers passed", () => {
            let spotify = new SpotifyWrapper({
                token: "foo"
            });
            spotify.request("url");
            const headers = {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer foo`
                }
            };

            expect(stubedFetch).to.have.been.calledWith("url", headers);
        });
    });
});
