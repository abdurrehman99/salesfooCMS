import React, { useState } from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import {
  Typography,
  Button,
  Grid,
  AppBar,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  InputLabel,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Avatar,
  IconButton,
  Input,
  Box,
  Container,
} from "@material-ui/core";
import Switch from "../CommonComponents/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import Add from "@material-ui/icons/Add";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import lockOpen from "../../assets/icons/lock-open.svg";
import saveIcon from "../../assets/icons/save.svg";
import callIcon from "../../assets/icons/call.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";

import IBMLogo from "../../assets/icons/IBM.svg";
import EditIcon from "../../assets/icons/edit.svg";
import delteIcon from "../../assets/icons/delete.svg";
import closeIcon from "../../assets/icons/close.svg";
import RefreshIcon from "../../assets/icons/refresh.svg";
import Line from "../CommonComponents/Line";

import {
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  NavigateNextIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  bodyPadding: {
    // paddingBottom: theme.spacing(1),
    fontWeight: "bold",
  },
  actionButtons: {
    marginRight: 20,
    width: 158.5,
    height: 40.7,
    fontSize: "13px",
    fontWeight: "bold",
    textTransform: "none",
  },
  filterButton: {
    marginRight: 20,
    width: 133.4,
    height: 44.5,
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "none",
  },
  appBar: {
    boxShadow: "none",
  },
  table: {
    border: 0,
  },
  marginLeft: {
    paddingLeft: 85,
  },
  iconButton: {
    paddingTop: 0,
    paddingButtom: 0,
  },
  searchBar: {
    width: 255.4,
    marginRight: 20,
  },
  avatar: {
    width: 95,
    height: 95,
  },
  breadcrumbs: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  navLink: {
    fontSize: 14,
    fontWeight: "600",
  },
  navLinkActive: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0582ff",
  },
  searchRow: {
    marginTop: theme.spacing(3),
    marginLeft: 40.1,
    verticalAlign: "center",
  },
  inlineFlex: {
    display: "inline-flex",
    verticalAlign: "center",
    width: "100%",
  },
  para: {
    fontWeight: "light",
    paddingBottom: 0,
  },
  footerRow: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  footerButton: {
    fontWeight: "bold",

    border: "1px solid #E0E0E0",
    marginLeft: 8,
    borderRadius: 4,
    width: 38,
    height: 39,
  },
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  return (
    <Container style={{ padding: 0, margin: 0 }} maxWidth="xl">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.marginLeft}
      >
        <Grid item xs={12} sm={3}>
          <Grid container direction="row" alignItems="center">
            <Avatar alt="SalesFoo" src={IBMLogo} className={classes.avatar} />
            <div>
              <Typography className={classes.bodyPadding} variant="h5">
                IBM
              </Typography>
              <Typography className={classes.para} variant="body1">
                Account
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Button
            className={classes.actionButtons}
            startIcon={<img src={saveIcon} alt="" width={14} height={14} />}
            variant="outlined"
          >
            Save
          </Button>
          <Button
            className={classes.actionButtons}
            startIcon={<img src={delteIcon} alt="" width={12} height={13} />}
            variant="outlined"
          >
            Delete
          </Button>
          <Button
            className={classes.actionButtons}
            startIcon={<img src={lockOpen} alt="" width={12} height={13} />}
            variant="outlined"
          >
            Activate
          </Button>
          <Button
            className={classes.actionButtons}
            startIcon={<img src={callIcon} alt="" width={12} height={13} />}
            variant="outlined"
          >
            New Contact
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.marginLeft}
      >
        <Grid item xs={12} sm={3}>
          <p>INDUSTRY TYPE</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p>PHONE NUMBER</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p>WEBSITE</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p>ACCOUNT OWNER</p>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.marginLeft}
      >
        <Grid item xs={12} sm={3}>
          <p>Information and Technology</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p>444-222-1233</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p>https://google.com</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container row alignItems="center">
            <Avatar alt="SalesFoo" src={{}} />
            <p>Hassan Ahmed</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        // justify="space-between"
        // alignItems="center"
        className={classes.marginLeft}
        // spacing={2}
      >
        <Grid item xs={12} sm={7}>
          <AppBar className={classes.appBar} position="static" color="white">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Detail" {...a11yProps(0)} />
              <Tab label="Related" {...a11yProps(1)} />
              <Tab label="Activities" {...a11yProps(2)} />
              <Tab label="News" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <p>Industry type</p>
            <Switch />
            {/* <InputLabel>Industry type</InputLabel> */}
            {/* <Input
              type={"text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => {}}>
                    <img src={closeIcon} width={16} height={16} alt="" />
                  </IconButton>
                </InputAdornment>
              }
            /> */}
          </SwipeableViews>
        </Grid>
        <Grid item xs={12} sm={5}></Grid>
      </Grid>
    </Container>
  );
};

export default Index;
