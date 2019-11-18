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
import LocationIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';

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
  location: {
    color: "green"
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

function SelectedDoctor(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
    const images = [
        "https://www.irishtimes.com/polopoly_fs/1.3641208.1537895677!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
    ]
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
  return (
    <Grid item sm className={classes.sideBarGrid}>
      <Card>
        <Paper className={classes.sideNews}>
          <Divider variant="fullWidth" />
          {images.map((image, idx) => <Fragment>
            <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h4" variant="h4">
                Doctor Name
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                  <LocationIcon className={classes.location} />Location
              </Typography> 
              <Typography variant="subtitle1" color="textSecondary">
                Medical Speciality
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
          <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                      />
        </Paper>
      </Card>
    </Grid>
  );
}

// export default RecentNewsSidebar;
export default SelectedDoctor;