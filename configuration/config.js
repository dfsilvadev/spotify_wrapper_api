"user strict";
const TOKEN_API =
    "BQCgh_5Q_-v0AMeIm93FXww8E7KGJBxK6rRAToVbSHXCtra038HCL2BAHEQYmzh7QcqrBCt-vH68PkZtR_oQP2ytQruTVrMhVrUKl-hKqfSUQRiAFiG91jkLTJR8YH_h_YU3L90Oz8EJppg";

export const HEADERS = {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_API}`
    }
};

export const API_URL = "https://api.spotify.com/v1";
