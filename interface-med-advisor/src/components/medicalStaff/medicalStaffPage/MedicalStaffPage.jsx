import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import SubFeaturedPost from "./SubFeaturedPost";
import MainFeaturedPost from "./MainFeaturedPost";
import RecentNewsSidebar from "../medicalStaffList/MostActiveDoctors";
import GoogleMapReact from 'google-map-react';
import SelectedDoctor from "./../medicalStaffPage/SelectedDoctor";
import { Map, GoogleApiWrapper } from 'google-map-react';
const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },

}));

export default function MedicalStaffPage() {
  const classes = useStyles();
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const mapStyles = {
    width: '100%',
    height: '100%'
  };
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>


          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom>
                About 
              </Typography>
              <Divider />
              <Typography
                variant="caption"
                style={{ marginBottom: 20, display: "inline-block" }}
              >
                On site since 11/09/2000
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Loremm, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam expedita ipsum cum, impedit corrupti earum laboriosam
                tempore, quo ut dignissimos adipisci molestiae quasi officia
                similique debitis, fugiat quod aut. Repudiandae?
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
                sem lacinia quam venenatis vestibulum. Sed posuere consectetur
                est at lobortis. Cras mattis consectetur purus sit amet
                fermentum. fugiat quod aut. Repudiandae?
              </Typography>
              <Typography variant="h5" gutterBottom>
                Reviews 
              </Typography>
              <Divider />
            </Grid>
            {/* sidebar */}
            <SelectedDoctor />
          </Grid>
        </main>
      </Container>
    </Fragment>
  );
}
