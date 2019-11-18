import React from "react";
import { NewsListWrapper } from "./NewsList.style";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RecentNewsSidebar from "./RecentNewsSidebar";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  gridContainer: {
    width: "70%",
    margin: "auto"
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100%"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const images = [
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=fill&fill=blur&w=128&h=128&q=60",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=fill&fill=blur&w=128&h=128&q=60",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=fill&fill=blur&w=128&h=128&q=60",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=fill&fill=blur&w=128&h=128&q=60"
];

export default function NewsList() {
  const classes = useStyles();
  return (
    <NewsListWrapper className={classes.root}>
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid
          item
          container
          sm={8}
          className={classes.gridContainer}
          spacing={3}
        >
          {images.map((imgUrl, idx) => (
            <Grid item sm={12} key={idx}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={imgUrl} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Article Headline
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Article description Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Ipsam magni quam odit,
                          eligendi facere numquam ut ratione? Consectetur,
                          eveniet. Ut, delectus? Suscipit necessitatibus alias
                          similique. Necessitatibus quae eius laudantium
                          aliquam.
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Tags: health, lifestyle
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          style={{ cursor: "pointer" }}
                        >
                          Published on {Math.abs(18 - 3 * idx)}/11/2019
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        style={{ cursor: "pointer" }}
                      >
                        <Link
                          to="/newsPage"
                          component={RouterLink}
                          variant="body2"
                          color="primary"
                        >
                          Learn more
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <RecentNewsSidebar />
      </Grid>
    </NewsListWrapper>
  );
}
