import React, { useState, useEffect } from "react";
import { getFeedListing } from "./Requests";
import { TextField, Grid, Paper, Typography, Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { RssFeedWrapper } from "./RssFeed.style";
const querystring = require("querystring");

function RssFeed(props) {
  const [initialized, setInitialized] = useState(false);
  const [url, setUrl] = useState("");
  const [listings, setListings] = useState([]);
  const [data, setData] = useState({});

  const getListings = async url => {
    try {
      const response = await getFeedListing(url);
      setListings(response.data.items);
      setData(response.data.feed);
    } catch (ex) {
      console.log(ex);
    }
  };

  const openLink = url => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (!initialized) {
      // const url = querystring.decode(props.location.search)["?url"];
      // setUrl(url);
      // getListings(url);
      // setInitialized(true);
    }
  });

  const style = {
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: "20px",
      marginRight: "20px",
      width: 200
    },
    button: {
      marginLeft: "20px",
      marginBottom: "10px"
    },
    buttonOpen: {
      marginTop: "20px"
    },
    grid: {
      justifyContent: "center",
      display: "flex",
      alignItems: "flex-end"
    },
    paper: {
      padding: "25px"
    }
  };

  const searchFeed = () => {
    const SearchQueryFormatted = props.rssFeedSearchQuery.replace(" ", "+");
    const rssUrl = `https://medisys.newsbrief.eu/rss?type=search&mode=advanced&atLeast=${SearchQueryFormatted}`;
    // props.history.push(`${window.location.pathname}?url=${props.rssFeedSearchQuery}`)

    const url = querystring.stringify({ rss_url: rssUrl });

    setUrl(url);
    getListings(url);
    setInitialized(true);
  };

  const preventDefault = event => event.preventDefault();

  return (
    <RssFeedWrapper>
      <Grid style={style.grid}>
        <TextField
          id="standard-search"
          label="Type here..."
          type="search"
          className="search-field"
          style={style.textField}
          margin="normal"
          onChange={evt => props.rssFeedHandleSearch(evt)}
        />
        <Button
          variant="outlined"
          color="primary"
          style={style.button}
          onClick={searchFeed}
        >
          Search
        </Button>
      </Grid>
      <div className="feed-page">
        <h1 className="center title">
          <img src={data.image} /> {data.title}
        </h1>
        <Grid
          container
          spacing={3}
          alignItems="center"
          direction="row"
          justify="center"
        >
          {listings.map((l, i) => {
            return (
              <Grid item key={i}>
                <Paper style={style.paper}>
                  <Typography variant="h4" gutterBottom className="card-title">
                    {l.title}
                  </Typography>
                  <div>
                    <Typography variant="body2" gutterBottom>
                      Tags:{" "}
                      {l.categories.map((category, idx) => (
                        <Link
                          key={category}
                          href="#"
                          onClick={preventDefault}
                          variant="body2"
                          style={style.link}
                        >
                          {category}
                          {l.categories.length - 1 === idx ? "" : ", "}
                        </Link>
                      ))}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      className="card-title"
                    >
                      Published on: {l.pubDate.split(" ")[0]}
                    </Typography>
                    <p>{l.description}</p>
                    {/* <p>{l.content}</p> */}

                    <Button
                      onClick={openLink.bind(this, l.link)}
                      color="primary"
                      style={style.buttonOpen}
                    >
                      Open News
                    </Button>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </RssFeedWrapper>
  );
}

export default RssFeed;
