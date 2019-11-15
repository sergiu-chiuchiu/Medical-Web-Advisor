import React, { Component } from "react";
import { NewsListWrapper } from "./NewsList.style";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  gridContainer: {
    width: "70%",
    margin: "auto"
  },
  sideNews: {
    minHeight: "200px",
    textAlign: "center",
    padding: theme.spacing(2),
}
}));

export default function NewsList() {
  const classes = useStyles();
  return (
    <NewsListWrapper className={classes.root}>
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid container sm={9} className={classes.gridContainer} spacing={3}>
          <Grid item sm={12}>
            <Paper className={classes.paper}>main content</Paper>
          </Grid>
          <Grid item sm={12}>
            <Paper className={classes.paper}>main content</Paper>
          </Grid>
          <Grid item sm={12}>
            <Paper className={classes.paper}>main content</Paper>
          </Grid>
          <Grid item sm={12}>
            <Paper className={classes.paper}>main content</Paper>
          </Grid>
        </Grid>
        <Grid item sm>
          <Paper className={(classes.sideNews)}>
            Most recent news
          </Paper>
        </Grid>
      </Grid>
    </NewsListWrapper>
  );
}
