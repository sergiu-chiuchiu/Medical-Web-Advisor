import React from "react";
import { MedicalStaffListWrapper } from "./MedicalStaffList.style";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MostActiveDoctors from "./MostActiveDoctors";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Rating from '@material-ui/lab/Rating';
import LocationIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  gridContainer: {
    width: "70%",
    margin: "auto",
  },

  favorite: {
    color:"red"
  },

  form:{
    width: "100%",
    margin: "auto",
  },

  input:{
    width: "55%",
    margin: "auto",
    fontWeight: "bold",
    fontSize: "18px"
  },

  location: {
    color: "green"
  },

  column: {
    paddingLeft: "20px",
    width: "70%"
  },

  select:{
    width: "300px",
    margin: "auto"
  },

  save:{
    fontWeight:"bold",
  },

  comment:{
    fontWeight:"bold",
    color: "blue"
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100%",
    backgroundColor: "#e7e8eb"
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
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6VfUF2qXmIfqYnXF9Pfhw7Sa0qBOzV1cITExSxYCnU0QOiq0&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnajnChmZjiCg_hE6r50EGqfhvxbSwHtv5RmABPcCT0bFe8-7Hw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfpSbVCWVgzjFHBKHN9BdAPlyczoLpURjtwKTMMFqG1QUGRJV&s"
];

export default function MedicalStaffList() {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
  return (
    <MedicalStaffListWrapper className={classes.root}>
     
              
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid>
        
        </Grid>

        <Grid
          item
          container
          sm={8}
          className={classes.gridContainer}
          spacing={3}
        >
          <table>
            <tr>
              <td className={classes.column}>
              <FormControl className={classes.form}>
                <InputLabel className={classes.input} >{"Select a medical specialty*"}</InputLabel>
                <Select
                  className={classes.select}
                  MenuProps={{ PaperProps: { className: "height400" } }}
                  value={"Select medical specialty"}
                  input={<Input id="select-specialty" />}
                >
                    <MenuItem key={"1"} value={"Dermatology"}>
                      <ListItemText primary={"Dermatology"} />
                    </MenuItem>
                    <MenuItem key={"2"} value={"orthopedist"}>
                      <ListItemText primary={"Orthopedist"} />
                    </MenuItem>
                    <MenuItem key={"3"} value={"Stomatology"}>
                      <ListItemText primary={"Stomatology"} />
                    </MenuItem>
                    <MenuItem key={"4"} value={"o"}>
                      <ListItemText primary={"Ginecology"} />
                    </MenuItem>
                </Select>
              </FormControl>
              </td>
              <td className={classes.column}>
              <FormControl className={classes.form}>
                <InputLabel className={classes.input} >{"Select city*"}</InputLabel>
                <Select
                  className={classes.select}
                  MenuProps={{ PaperProps: { className: "height400" } }}
                  value={"Select medical specialty"}
                  input={<Input id="select-specialty" />}
                >
                    <MenuItem key={"1"} value={"Iasi"}>
                      <ListItemText primary={"Iasi"} />
                    </MenuItem>
                    <MenuItem key={"2"} value={"Bucuresti"}>
                      <ListItemText primary={"Bucuresti"} />
                    </MenuItem>
                    <MenuItem key={"3"} value={"Cluj"}>
                      <ListItemText primary={"Cluj"} />
                    </MenuItem>
                    <MenuItem key={"4"} value={"Timsoara"}>
                      <ListItemText primary={"Timsoara"} />
                    </MenuItem>
                </Select>
              </FormControl>
              </td>
            </tr>
          </table>
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
                        <Typography gutterBottom variant="h5">
                          Doctor Name
                        </Typography>
                        <Typography gutterBottom variant="body1">
                          Medical specialty
                        </Typography> 
                        <Typography gutterBottom variant="subtitle1">
                        <LocationIcon className={classes.location} />Location
                        </Typography> 
                        <Typography gutterBottom variant="subtitle1">
                          About
                        </Typography> 
                        <Typography variant="subtitle1" gutterBottom>
                            Loremm, ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam expedita ipsum cum, impedit corrupti earum laboriosam
                            tempore, quo ut dignissimos adipisci molestiae quasi officia
                            similique debitis, fugiat quod aut. Repudiandae?
                      </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          style={{ cursor: "pointer" }}
                        >
                          On site since {Math.abs(18 - 3 * idx)}/11/2019
                        </Typography>
                        
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        style={{ cursor: "pointer" }}
                      >
                        <Link
                          to="/medicalStaffPage"
                          component={RouterLink}
                          variant="body2"
                          color="primary"
                        >
                          Read more
                        </Link>
                      </Typography>
                      <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                      />
                      <Typography className={classes.favorite} gutterBottom variant="subtitle2">
                          <SaveIcon />
                          <Button className={classes.save}>Favorite</Button>
                        </Typography>
                        <Typography gutterBottom variant="subtitle2">
                          <CommentIcon className={classes.comment}/>120
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <MostActiveDoctors />
      </Grid>
    </MedicalStaffListWrapper>
  );
}
