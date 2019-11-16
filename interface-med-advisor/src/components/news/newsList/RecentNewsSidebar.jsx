import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  CardContent,
  CardMedia,
  Card
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sideNews: {
    MinHeight: "200px",
    textAlign: "center",
    padding: theme.spacing(2),
    display: "block",
  },
  sideBarGrid: {
    marginBottom: "20px",
  },
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    maxWidth: 250,
    height: 151,
    textAlign: "center",
    margin: "auto",
    marginBottom: "20px"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

function RecentNewsSidebar(props) {
  const classes = useStyles();

    const images = [
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=151&q=60",
        "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=151&q=60",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=151&q=60",
    ]

  return (
    <Grid item sm className={classes.sideBarGrid}>
      <Card>
        <Paper className={classes.sideNews}>
          <strong>Most recent news</strong>
          <Divider variant="fullWidth" />
          {images.map((image, idx) => <Fragment>
            <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                News headline
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                By Joe Dyson
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={image}
            title="Live from space album cover"
          />
          {idx === images.length - 1 ? "" : <Divider variant="middle" />}
          </Fragment>)}
        </Paper>
      </Card>
    </Grid>
  );
}

export default RecentNewsSidebar;
