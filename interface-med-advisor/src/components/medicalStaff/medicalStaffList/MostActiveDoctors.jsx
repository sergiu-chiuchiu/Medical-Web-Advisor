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

function MostActiveDoctors(props) {
  const classes = useStyles();

    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXcyPwJhwzHJUVtXhAzgOlodaI9N8fwj-r9gt0FJcpjO2GmY3&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpQzdQfecQapw1fkQ7rS2sZB1XSONwZ5QWz1zH_SwcgeSYp_2TQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Hj_1pB8lZZ9FUq86qOQgoYDx994fjk_gg0vdjLmr9KI8BU1OKw&s",
    ]

  return (
    <Grid item sm className={classes.sideBarGrid}>
      <Card>
        <Paper className={classes.sideNews}>
          <strong>Most active doctors</strong>
          <Divider variant="fullWidth" />
          {images.map((image, idx) => <Fragment>
            <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Doctor Name
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                From Iasi
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

export default MostActiveDoctors;
