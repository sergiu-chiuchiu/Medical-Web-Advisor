const axios = require("axios");
const corsUrl = "https://api.rss2json.com/v1/api.json?";
// const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedisys.newsbrief.eu%2Frss%3Ftype%3D24hrs%26language%3Den%26duplicates%3Dfalse";
// const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedisys.newsbrief.eu%2Frss%3Ftype%3Dsearch%26mode%3Dadvanced%26atLeast%3Dcancer";
// const corsUrl = "https://api.rss2json.com/v1/api.json?c=https://medisys.newsbrief.eu/rss?type=search&mode=advanced&atLeast=colon+cancer";


export const getFeedListing = url => axios.get(`${corsUrl}${url}`);