"user strict";
const TOKEN_API =
    "BQCmL42L4tGFqTGA09Gk8GnSKU8ZsJhcjIVE_oQx5F7uVcpwZIvPdHWjENVOoykG2XZLvtSH6-1f-jYR2t11TvUOv_Po3s37ThLMF3ZwR_VzYZl1BTxYfw0JmuG5TeYrBbuZmc3mgFyNfyM";

export const HEADERS = {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_API}`
    }
};

export const API_URL = "https://api.spotify.com/v1";
