import { expect } from "chai";
import SpotifyWrapper from "../src/index";

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
});
