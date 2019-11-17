import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

function MainFeaturedPost(props) {
  const { classes } = props;

  return (
    <Paper className={classes.mainFeaturedPost}>
      {
        <img
          style={{ display: "none" }}
          src="https://source.unsplash.com/user/erondu"
          alt="background"
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Title of a featured post
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Multiple lines of text that form the desc, Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Maiores vero aliquid, ab
              quaerat nesciunt accusamus 
            </Typography>
            <Link variant="subtitle1" href="#">
              Continue reading…
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainFeaturedPost;
